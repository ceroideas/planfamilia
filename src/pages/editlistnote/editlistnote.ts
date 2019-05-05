import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, AlertController, ActionSheetController} from 'ionic-angular';
import { NotesPage } from '../notes/notes';
import * as $ from 'jquery';

/**
 * Generated class for the EditlistnotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editlistnote',
  templateUrl: 'editlistnote.html',
})
export class EditlistnotePage {
	userListNotes : any;
	items : any = [];
	item_name_input:any;
	public n;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public loadingCtrl: LoadingController,public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
  		this.n = navParams.get("n");
        this.events.subscribe('editarObjeto',(/*parametro*/)=>{
            // this.userPerOb = parametro
            this.userListNotes = JSON.parse(localStorage.getItem('userListNotes'));
        });

        $.each(this.n.itemms, (index, val)=> {
			this.items.push(val.item);
		});
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad EditlistnotePage');
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

    editListNote(){
    	var url = 'http://localhost/plandefamilia/public/editListNotes';
  		var dat = $('#form_edit_list_note').serialize();
  		let loader: any;
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
		.done((data) => {
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
                  subTitle: 'Nota tipo lista editada exitosamente',
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

    deleteNoteN(){
  		var url = 'http://localhost/plandefamilia/public/deleteListNote/'+this.n.id;
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
				localStorage.removeItem("userListNotes");
				localStorage.setItem('userListNotes' , JSON.stringify(data.list_notes));
				this.events.publish('editarObjeto');
				loader.dismiss();
				this.alertCtrl.create({
                  title: 'Exito!',
                  subTitle: 'Nota eliminada exitosamente',
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

    deleteNote(){
    	this.actionSheetCtrl.create({
	      	title: 'Seguro de eliminar esta nota?',
	      	buttons: [
	        	{
	          		text: 'Confirmar',
	          		role: 'destructive',
	          		handler: () => {
	            		this.deleteNoteN();
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
