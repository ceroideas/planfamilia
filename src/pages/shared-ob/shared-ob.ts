import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Events } from 'ionic-angular';
import { CreateSharedObjetivePage } from '../create-shared-objetive/create-shared-objetive';
import { EditSharedObjetivePage } from '../edit-shared-objetive/edit-shared-objetive';
import { DetailSharedObjetivePage } from '../detail-shared-objetive/detail-shared-objetive';


/**
 * Generated class for the SharedObPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shared-ob',
  templateUrl: 'shared-ob.html',
})
export class SharedObPage {
    userDetails : any;
    userShaOb : any;
    constructor(public navCtrl: NavController, public navParams: NavParams , public events: Events) {
  	    var data = JSON.parse(localStorage.getItem('userAuth'));
        var obs = JSON.parse(localStorage.getItem('userShaOb'));
        this.userDetails = data;
        this.userShaOb = obs;
        this.events.subscribe('editarObjeto',(/*parametro*/)=>{
            // this.userShaOb = parametro
            this.userShaOb = JSON.parse(localStorage.getItem('userShaOb'));
        })
    }

  	ionViewDidLoad() { 
    	console.log('ionViewDidLoad SharedObPage');
  	}

    createSharedOb(){
        this.navCtrl.push(CreateSharedObjetivePage);
    }

    editSb(p){
        this.navCtrl.push(EditSharedObjetivePage , {
            s:p
        });
    }

    viewSb(p){
        this.navCtrl.push(DetailSharedObjetivePage , {
            s:p
        });
    }
}
