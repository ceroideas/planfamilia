import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-activities',
  templateUrl: 'view-activities.html',
})
export class ViewActivitiesPage {
	public act;
	public day;
	date : any;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.act = JSON.parse(navParams.get('act'));
  		this.day = navParams.get('day');
  		var d = new Date(this.day);
  		this.date = d.toLocaleDateString();
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad ViewActivitiesPage');
  	}

}
