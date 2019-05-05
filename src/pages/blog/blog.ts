import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailNewPage }    from '../detail-new/detail-new';

/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage { 
	news : any;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		var ne = JSON.parse(localStorage.getItem('news'));
  		this.news = ne;
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad BlogPage');
  	}

  	viewNew(p){
  		this.navCtrl.push(DetailNewPage , {
            n:p
        });
  	}
}
