import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Events, LoadingController, AlertController} from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the CretelistnotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cretelistnote',
  templateUrl: 'cretelistnote.html',
})
export class CretelistnotePage {
	userDetails : any;
	userListNotes : any;
	items : any = [];
	item_name_input:any;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
  		var data = JSON.parse(localStorage.getItem('userAuth'));
        var not = JSON.parse(localStorage.getItem('userListNotes'));
        this.userDetails = data;
        this.userListNotes = not;
        this.events.subscribe('editarObjeto',(/*parametro*/)=>{
            // this.userPerOb = parametro
            this.userListNotes = JSON.parse(localStorage.getItem('userListNotes'));
        })
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad CretelistnotePage');
  	}
      
  	addItem(){
        if (this.item_name_input != '') {
        	this.items.push(this.item_name_input);
        }
        this.item_name_input = '';
        console.log(this.item_name_input);
    }

    borrarItem(i){
        this.items.splice(i,1);
    }

    addListNote(){
    	var url = 'http://localhost/plandefamilia/public/addListNotes';
  		var dat = $('#form_add_list_note').serialize();
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
				localStorage.removeItem("userListNotes");
				localStorage.setItem('userListNotes' , JSON.stringify(data.list_notes));
				this.events.publish('editarObjeto');
				loader.dismiss();
				this.alertCtrl.create({
                  title: 'Exito!',
                  subTitle: 'Nota tipo lista registrada exitosamente',
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
}
