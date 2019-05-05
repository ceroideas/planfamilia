import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Events, LoadingController, AlertController} from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the CreatePersonalObPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-personal-ob',
  templateUrl: 'create-personal-ob.html',
})
export class CreatePersonalObPage {
	userDetails: any;
	myDate: any;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
		var data = JSON.parse(localStorage.getItem('userAuth'));
		if(data){
	    	this.userDetails = data;
		}
  	}
  	goHome(){
  		var p_o = JSON.parse(localStorage.getItem('userPerOb'));
  		this.navCtrl.pop();
  	}
  	ionViewDidLoad() { 
    	console.log('ionViewDidLoad CreatePersonalObPage');
  	}
  	addPersonalOb(){
  		var url = 'http://localhost/plandefamilia/public/addPersonalOb';
  		var dat = $('#form_add_p_o').serialize();
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
				localStorage.removeItem("userPerOb");
				localStorage.setItem('userPerOb' , JSON.stringify(data.p_o));
				this.events.publish('editarObjeto');
				loader.dismiss();
				this.alertCtrl.create({
                  title: 'Exito!',
                  subTitle: 'Objetivo personal registrado exitosamente',
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

    showMenu(){
        $('.dropdown-content').toggle();
    }

    myPerfil(){
        this.navCtrl.push(MyperfilPage);
    }

    myFamily(){
        this.navCtrl.push(MyfamilyPage);
    }
}
