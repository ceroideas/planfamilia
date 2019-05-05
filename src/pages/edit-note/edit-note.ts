import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, AlertController, ActionSheetController} from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the EditNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-note',
  templateUrl: 'edit-note.html',
})
export class EditNotePage {
	public n;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public loadingCtrl: LoadingController,public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
        this.n = navParams.get("n");
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad EditNotePage');
  	}

  	editTextNote(){
  		var url = 'http://localhost/plandefamilia/public/editTextNote';
  		var dat = $('#form_edit_note').serialize();
  		console.log(dat);
  		let loader : any;
  		$.ajax({
			url: url,
			type: 'POST',
			data: dat,
			beforeSend: ()=>{
                loader = this.loadingCtrl.create({
                  content: "Editando",
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
				localStorage.removeItem("userNotes"); 
				/*let parametro = */localStorage.setItem('userNotes' , JSON.stringify(data.notes));

				// this.events.publish('editarObjeto',(parametro)); puedes usarlo asi y pasar el parametro
				this.events.publish('editarObjeto');
				loader.dismiss();
				this.alertCtrl.create({
                  title: 'Exito!',
                  subTitle: 'Nota de texto editada exitosamente',
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

  	deleteTextNote(){
  		var url = 'http://localhost/plandefamilia/public/deleteTextNote/'+this.n.id;
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
				localStorage.removeItem("userNotes");
				localStorage.setItem('userNotes' , JSON.stringify(data.notes));

				// this.events.publish('editarObjeto',(parametro)); puedes usarlo asi y pasar el parametro
				this.events.publish('editarObjeto');

				loader.dismiss();
				this.alertCtrl.create({
                  title: 'Exito!',
                  subTitle: 'Nota de texto eliminada exitosamente',
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

  	delNote(){
  		this.actionSheetCtrl.create({
	      	title: 'Seguro de eliminar esta nota de texto?',
	      	buttons: [
	        	{
	          		text: 'Confirmar',
	          		role: 'destructive',
	          		handler: () => {
	            		this.deleteTextNote();
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
