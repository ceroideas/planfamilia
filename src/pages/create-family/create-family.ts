import { Component , ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , Events, LoadingController, AlertController , Slides} from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the CreateFamilyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-family',
  templateUrl: 'create-family.html',
})
export class CreateFamilyPage {
	userDetails: any;
	searchQuery: any = '';
  	items: any = [];
  	school_id : any;
  	t_s_n : any;
  	menor_age: any;
  	userFamily:any;
  	@ViewChild(Slides) slides: Slides;
  	avatar_item : any = 'avatar0.png';
  	constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
  		var data = JSON.parse(localStorage.getItem('userAuth'));
  		var fami = JSON.parse(localStorage.getItem('userFamily'));
  		this.userDetails = data;
  		this.userFamily = fami;
  		this.initializeItems();
  	}

  	initializeItems() {
	    this.items = JSON.parse(localStorage.getItem('schools'));
	}

	getItems(ev: any) {
	    // Reset items back to all of the items
	    this.initializeItems();

	    // set val to the value of the searchbar
	    const val = ev.target.value;

	    // if the value is an empty string don't filter the items
	    if (val && val.trim() != '') {
	      this.items = this.items.filter((item) => {
	        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
	      })
	    }
	}

	myChange(){
		$('#no_s').toggle();
		if (this.menor_age != true) {
			// this.t_s_n = '';
			this.school_id = '';
			$('.itemSc').css('background' , 'white');
			$('.searchbar-input').click();
			$('.searchbar-clear-icon').click();
		}
	}

	addSchoolId(item){
		this.school_id = item.id;
		this.t_s_n = item.name;

		$('.itemSc').css('background' , 'white');
		$('#scholl_'+item.id).css('background' , '#999');
	}
	slideChanged(){
		let currentIndex = this.slides.getActiveIndex();

		this.avatar_item = 'avatar'+currentIndex+'.png';
	}

	addFamily(){
		var url = 'http://localhost/plandefamilia/public/addFamily';
  		var dat = $('#form_add_family').serialize();
  		let loader: any;
  		$.ajax({
			url: url,
			type: 'POST',
			data: dat,
			beforeSend: ()=>{
                loader = this.loadingCtrl.create({
                  content: "Registrando",
                });
                loader.present();
            }
		})
		.done((data) => {
			console.log(data);

			if (data.success != true) {
				loader.dismiss();
                this.alertCtrl.create({
                  title: 'Error!',
                  subTitle: data.msj,
                  buttons: ['OK']
                }).present();
			}else{
				localStorage.removeItem("userFamily");
				localStorage.setItem('userFamily' , JSON.stringify(data.family));
				this.events.publish('editarObjeto');
				loader.dismiss();
				this.alertCtrl.create({
                  title: 'Exito!',
                  subTitle: 'Familiar registrado exitosamente',
                  buttons: ['OK']
                }).present();
				this.navCtrl.pop();
			}
		})
		.fail(function(r) {
			alert(r)
		})
		.always(function() {
			console.log("complete");
		});
	}
  	ionViewDidLoad() {
    	console.log('ionViewDidLoad CreateFamilyPage');
  	}

}
