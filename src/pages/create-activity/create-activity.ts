import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Events, LoadingController, AlertController} from 'ionic-angular';
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
})
export class CreateActivityPage {
	userDetails: any;
	myDate: any;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		var data = JSON.parse(localStorage.getItem('userAuth'));
	    this.userDetails = data;
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad CreateActivityPage');
  	}

}
