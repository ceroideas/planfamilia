import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Events, LoadingController, AlertController , Slides} from 'ionic-angular';
import { CreateFamilyPage } from '../create-family/create-family';

/**
 * Generated class for the MyfamilyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myfamily',
  templateUrl: 'myfamily.html',
})
export class MyfamilyPage {
	userFamily:any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
  		var dat = JSON.parse(localStorage.getItem('userFamily'));
  		this.userFamily = dat;
        this.events.subscribe('editarObjeto',()=>{
          this.userFamily = JSON.parse(localStorage.getItem('userFamily'));
        })
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad MyfamilyPage');
  	}

    addFamily(){
        this.navCtrl.push(CreateFamilyPage);
    }
}
