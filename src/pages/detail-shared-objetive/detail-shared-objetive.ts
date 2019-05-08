import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, AlertController, ActionSheetController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import * as $ from 'jquery';

/**
 * Generated class for the DetailSharedObjetivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({ 
  selector: 'page-detail-shared-objetive',
  templateUrl: 'detail-shared-objetive.html',
    providers: [AuthServiceProvider]

})
export class DetailSharedObjetivePage {
	public s;
	userFamily : any;
	family_r : any = [];
  	constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public loadingCtrl: LoadingController,public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController,public auth: AuthServiceProvider) {
  		this.s = navParams.get("s");
  		var dat = JSON.parse(localStorage.getItem('userFamily'));
  		this.userFamily = dat;

  		$.each(this.s.get_family, (index, val)=> {
			$.each(this.userFamily, (index2, val2)=> {
				if (val2.id === val.family_id) {
  					this.family_r.push(val2);
				}
			});
		});
		console.log(this.family_r);
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad DetailSharedObjetivePage');
  	}

  	deleteShaOb(){
        var url = this.auth.url+'/deleteShaOb/'+this.s.id;
        let loader : any;
        $.ajax({
            url: url,
            type: 'GET',
            data: {},
            beforeSend: ()=>{
                loader = this.loadingCtrl.create({
                  content: "Eliminando",
                });
                loader.present();
            }
        })
        .done((data)=> {
            console.log(data);

            if (data.success != true) {
                loader.dismiss();
                this.alertCtrl.create({
                  title: 'Error!',
                  subTitle: data.msj,
                  buttons: ['OK']
                }).present();
            }else{
                localStorage.removeItem("userShaOb");
                localStorage.setItem('userShaOb' , JSON.stringify(data.s_o));
                this.events.publish('editarObjeto');
                loader.dismiss();
                this.alertCtrl.create({
                  title: 'Exito!',
                  subTitle: 'Objetivo compartido eliminado exitosamente',
                  buttons: ['OK']
                }).present();
                this.navCtrl.pop();
            }
        })
        .fail((r)=> {
            alert(r)
        })
        .always(()=> {
            console.log("complete");
        });
    }

    ShaOb(){
        this.actionSheetCtrl.create({
            title: 'Seguro de eliminar este objetivo compartido?',
            buttons: [
                {
                    text: 'Confirmar',
                    role: 'destructive',
                    handler: () => {
                        this.deleteShaOb();
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
}
