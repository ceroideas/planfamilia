import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, AlertController, ActionSheetController} from 'ionic-angular';
import * as $ from 'jquery';


/**
 * Generated class for the CreateNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-note',
  templateUrl: 'create-note.html',
})
export class CreateNotePage {
	userDetails: any;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public loadingCtrl: LoadingController,public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
  		var data = JSON.parse(localStorage.getItem('userAuth'));
		if(data){
	    	this.userDetails = data;
		}
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad CreateNotePage');
  	}

  	addTextNote(){
  		var url = 'http://localhost/plandefamilia/public/addTextNote';
  		var dat = $('#form_add_note').serialize();
  		let loader : any;
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
				localStorage.removeItem("userNotes");
				localStorage.setItem('userNotes' , JSON.stringify(data.notes));
				this.events.publish('editarObjeto');
				loader.dismiss();
				this.alertCtrl.create({
                  title: 'Exito!',
                  subTitle: 'Nota de texto registrada exitosamente',
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
