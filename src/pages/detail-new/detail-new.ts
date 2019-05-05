import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-new',
  templateUrl: 'detail-new.html',
})
export class DetailNewPage {
	public n;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.n = navParams.get("n");
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad DetailNewPage');
  	}

  	loadImg(){
  		alert('hola');
  	}
}
