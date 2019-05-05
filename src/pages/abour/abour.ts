import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConditionsPage } from '../conditions/conditions';
import { PrivacyPage } from '../privacy/privacy';

/**
 * Generated class for the AbourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abour',
  templateUrl: 'abour.html',
})
export class AbourPage {

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad AbourPage');
  	}

  	privacy(){
  		this.navCtrl.push(PrivacyPage);
  	}

  	conditions(){
  		this.navCtrl.push(ConditionsPage);
  	}
}
