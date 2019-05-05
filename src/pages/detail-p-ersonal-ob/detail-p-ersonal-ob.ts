import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, AlertController, ActionSheetController} from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the DetailPErsonalObPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
  selector: 'page-detail-p-ersonal-ob',
  templateUrl: 'detail-p-ersonal-ob.html',
})
export class DetailPErsonalObPage {
	public p;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public loadingCtrl: LoadingController,public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
  		this.p = navParams.get("p");
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad DetailPErsonalObPage');
  	}

  	deletePerOb(){
  		var url = 'http://localhost/plandefamilia/public/deletePerOb/'+this.p.id;
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
				localStorage.removeItem("userPerOb");
				localStorage.setItem('userPerOb' , JSON.stringify(data.p_o));

				// this.events.publish('editarObjeto',(parametro)); puedes usarlo asi y pasar el parametro
				this.events.publish('editarObjeto');
				loader.dismiss();
				this.alertCtrl.create({
                  title: 'Exito!',
                  subTitle: 'Objetivo personal eliminado exitosamente',
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

  	PerOb(){
  		this.actionSheetCtrl.create({
	      	title: 'Seguro de eliminar este objetivo personal',
	      	buttons: [
	        	{
	          		text: 'Confirmar',
	          		role: 'destructive',
	          		handler: () => {
	            		this.deletePerOb();
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
