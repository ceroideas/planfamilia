import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, AlertController, ActionSheetController} from 'ionic-angular';
import * as $ from 'jquery';
/**
 * Generated class for the MyperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myperfil',
  templateUrl: 'myperfil.html',
})
export class MyperfilPage {
	userDetails:any;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public loadingCtrl: LoadingController,public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
  		var data = JSON.parse(localStorage.getItem('userAuth'));
		if(data){
	    	this.userDetails = data;
		}
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad MyperfilPage');
  	}

  	editPersonalDates(){
  		var url = 'http://localhost/plandefamilia/public/editPersoalDates';
  		var dat = $('#f_e_p_d').serialize();
  		let loader: any;
  		$.ajax({
			url: url,
			type: 'POST',
			data: dat,
			beforeSend: ()=>{
                loader = this.loadingCtrl.create({
                  content: "Procesando",
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
				localStorage.removeItem("userAuth");
				localStorage.setItem('userAuth' , JSON.stringify(data.user));
				this.events.publish('editarObjeto');
				loader.dismiss();
				this.alertCtrl.create({
                  title: 'Exito!',
                  subTitle: data.msj,
                  buttons: ['OK']
                }).present();
				this.navCtrl.pop();
			}
		})
		.fail(()=> {
			loader.dismiss();
            this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Error al procesar los datos, intente mas tarde',
                buttons: ['OK']
            }).present();
		})
		.always(function() {
			console.log("complete");
		});
  	}

}
