import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-activity',
  templateUrl: 'detail-activity.html',
})
export class DetailActivityPage {
	public p;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.p = navParams.get('a');
  	}	

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad DetailActivityPage');
  	}

}
