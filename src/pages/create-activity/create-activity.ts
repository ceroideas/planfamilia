import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Events, LoadingController, AlertController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import * as $ from 'jquery';

/**
 * Generated class for the CreateActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
  selector: 'page-create-activity',
  templateUrl: 'create-activity.html',
      providers: [AuthServiceProvider]

})
export class CreateActivityPage {
	userDetails: any;
	myDate: any;
    userFamily: any;
    family_r: any = [];
      constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public loadingCtrl: LoadingController,public alertCtrl: AlertController,public auth: AuthServiceProvider) {
  		var data = JSON.parse(localStorage.getItem('userAuth'));
        var dat = JSON.parse(localStorage.getItem('userFamily'));
        this.userFamily = dat;
        this.userDetails = data;
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad CreateActivityPage');
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

    addActivity(){
          var url = this.auth.url+'/addActivity';
          var dat = $('#form_add_ac').serialize();
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
                localStorage.removeItem("userActivity");
                localStorage.setItem('userActivity' , JSON.stringify(data.ac));
                this.events.publish('editarObjeto');
                loader.dismiss();
                this.alertCtrl.create({
                  title: 'Exito!',
                  subTitle: 'Actividad registrada exitosamente',
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
