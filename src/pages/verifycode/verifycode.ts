import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ActionSheetController} from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { WelcomePage } from '../welcome/welcome';

import * as $ from 'jquery';

/**
 * Generated class for the VerifycodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verifycode', 
  templateUrl: 'verifycode.html',
})
export class VerifycodePage {
	public id;
    constructor(public actionSheetCtrl: ActionSheetController,private emailComposer: EmailComposer,public navCtrl: NavController, public navParams: NavParams , public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
  		this.id   = navParams.get("id");
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad VerifycodePage');
  	}

  	activate(){
  		let apiUrl : any = 'http://localhost/plandefamilia/public/';
        let loader: any;
        var f = $('#form-activate').serialize();
        console.log(f);
        $.ajax({
            url: apiUrl+'activateUser',
            type: 'POST',
            data:f,
            beforeSend: ()=>{
                loader = this.loadingCtrl.create({
                  content: "Procesando",
                });
                loader.present();
            }
        })
        .done((data)=> {
            // console.log(data);
            if (data.success != true) {
                loader.dismiss();
                this.alertCtrl.create({
                  	title: 'Error!',
                  	subTitle: data.msj,
                  	buttons: ['OK']
                }).present();
            }else{
                loader.dismiss();
                this.alertCtrl.create({
                  	title: 'Exito!',
                  	subTitle: data.msj,
                  	buttons: ['OK']
                }).present();

                this.navCtrl.setRoot(WelcomePage);
            }
        })
        .fail((r)=> {
             loader.dismiss();
                this.alertCtrl.create({
                  title: 'Error!',
                  subTitle: 'Error al procesar los datos, intente mas tarde',
                  buttons: ['OK']
                }).present();
        })
        .always(()=> {
            console.log("complete");
        });
  	}

    resendCodeConfirm(){
        this.actionSheetCtrl.create({
            title: 'Seguro de reenviar el codigo?',
            buttons: [
                {
                    text: 'Confirmar',
                    role: 'destructive',
                    handler: () => {
                        this.resendCode();
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancelado');
                    }
                }
              ]
        }).present();
    }

    resendCode(){
        let apiUrl : any = 'http://localhost/plandefamilia/public/resendCode/'+this.id;
        let loader: any;
        $.ajax({
            url: apiUrl,
            type: 'GET',
            data:{},
            beforeSend: ()=>{
                loader = this.loadingCtrl.create({
                  content: "Procesando",
                });
                loader.present();
            }
        })
        .done((data)=> {
            // console.log(data);
            if (data.success != true) {
                loader.dismiss();
                this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: data.msj,
                    buttons: ['OK']
                }).present();
            }else{
                loader.dismiss();
                this.alertCtrl.create({
                    title: 'Exito!',
                    subTitle: data.msj,
                    buttons: ['OK']
                }).present();
            }
        })
        .fail((r)=> {
             loader.dismiss();
                this.alertCtrl.create({
                  title: 'Error!',
                  subTitle: 'Error al procesar los datos, intente mas tarde',
                  buttons: ['OK']
                }).present();
        })
        .always(()=> {
            console.log("complete");
        });
    }

}
