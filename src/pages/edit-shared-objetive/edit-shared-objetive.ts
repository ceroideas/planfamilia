import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, AlertController, ActionSheetController} from 'ionic-angular';
import * as $ from 'jquery';


/**
 * Generated class for the EditSharedObjetivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shared-objetive',
  templateUrl: 'edit-shared-objetive.html',
})
export class EditSharedObjetivePage {
	public s;
	userFamily : any;
	family_r : any = [];
  	constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public loadingCtrl: LoadingController,public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
  		this.s = navParams.get("s");
  		var dat = JSON.parse(localStorage.getItem('userFamily'));
  		this.userFamily = dat;

  		$.each(this.s.get_family, (index, val)=> {
			$.each(this.userFamily, (index2, val2)=> {
				if (val2.id === val.family_id) {
					val2.status = true;
  					this.family_r.push(val2.id);
					console.log(val2.id+'Es igual a '+val.family_id);
				}
			});
		});

		console.log(this.userFamily);
  	}

  	updateCucumber(f){
  		if (f.status != true) {
  			$.each(this.family_r, (index, val)=> {
				if(f.id == val){
					this.family_r.splice(index, 1);
  					console.log(this.family_r);
				}
			});
  		}else{
  			this.family_r.push(f.id); 
  			console.log(this.family_r);
  		}
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad EditSharedObjetivePage');
  	}

  	editSharedOb(){
  		var url = 'http://localhost/plandefamilia/public/editSharedOb';
  		var dat = $('#form_edit_s_o').serialize(); 
  		let loader : any;
  		console.log(dat);
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
				localStorage.removeItem("userShaOb"); 
				localStorage.setItem('userShaOb' , JSON.stringify(data.s_o));
				this.events.publish('editarObjeto');
				loader.dismiss();
				this.alertCtrl.create({
                  title: 'Exito!',
                  subTitle: 'Objetivo compartido editado exitosamente',
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

    deleteShaOb(){
        var url = 'http://localhost/plandefamilia/public/deleteShaOb/'+this.s.id;
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
