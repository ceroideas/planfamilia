import { Component } from '@angular/core';
import { NavController , NavParams, Events } from 'ionic-angular';

import {WelcomePage} from '../welcome/welcome';
import { PersonalObPage } from '../personal-ob/personal-ob';
import { DetailPErsonalObPage }    from '../detail-p-ersonal-ob/detail-p-ersonal-ob';
import { DetailSharedObjetivePage }    from '../detail-shared-objetive/detail-shared-objetive';
import { CreatePersonalObPage }    from '../create-personal-ob/create-personal-ob';
import { CreateSharedObjetivePage }    from '../create-shared-objetive/create-shared-objetive';
import { EditPersonalObPage }    from '../edit-personal-ob/edit-personal-ob';
import { EditSharedObjetivePage }    from '../edit-shared-objetive/edit-shared-objetive';
import { MyperfilPage }    from '../myperfil/myperfil';
import { MyfamilyPage }    from '../myfamily/myfamily';
import { DetailActivityPage } from '../detail-activity/detail-activity';
import { CreateActivityPage }    from '../create-activity/create-activity';

import * as $ from 'jquery';


@Component({
  selector: 'page-home', 
  templateUrl: 'home.html'
})
export class HomePage {
    rootPage: any = WelcomePage;
    public userDetails;
    public userPerOb;
    userShaOb:any;
    userActivity;
    constructor(public navCtrl: NavController,public navParams: NavParams, public events: Events) {
        var data = JSON.parse(localStorage.getItem('userAuth'));
        var obs = JSON.parse(localStorage.getItem('userPerOb'));
        var sha = JSON.parse(localStorage.getItem('userShaOb'));
        var act = JSON.parse(localStorage.getItem('userActivity'));
        this.userDetails = data;
        this.userShaOb = sha;
        this.userPerOb = obs;
        this.userActivity = act;
        // this.userPerOb = navParams.get("userPerOb");

        this.events.subscribe('editarObjeto',()=>{
            // this.userPerOb = parametro
            this.userPerOb    = JSON.parse(localStorage.getItem('userPerOb'));
            this.userShaOb    = JSON.parse(localStorage.getItem('userShaOb'));
            this.userActivity = JSON.parse(localStorage.getItem('userActivity'));
        })
      }
    personalOb(){
        this.navCtrl.push(PersonalObPage);
    }

    createPersonalOb(){
        this.navCtrl.push(CreatePersonalObPage);
    }

    createSharedOb(){
        this.navCtrl.push(CreateSharedObjetivePage);
    }

    editOb(p){
        this.navCtrl.push(EditPersonalObPage , {
            p:p,
            userDetails:this.userDetails
        });
    }

    viewOb(p){
        this.navCtrl.push(DetailPErsonalObPage , {
            p:p
        });
    }

    logout(){
        let aux = localStorage.getItem('oneSignalIdFamilia');
        localStorage.clear();
        localStorage.setItem('oneSignalIdFamilia',aux);
        setTimeout(()=>this.navCtrl.setRoot(WelcomePage), 500);
    }

    showMenu(){
        $('.dropdown-content').toggle();
    }

    myPerfil(){
        this.navCtrl.push(MyperfilPage);
    }

    myFamily(){
        this.navCtrl.push(MyfamilyPage);
    }

    editShaOb(p){
        this.navCtrl.push(EditSharedObjetivePage , {
            s:p
        })
    }

    viewShaOb(p){
        this.navCtrl.push(DetailSharedObjetivePage , {
            s:p
        })
    }

    viewAct(p){
        this.navCtrl.push(DetailActivityPage , {
            a:p
        })
    }

    addAct(){
        this.navCtrl.push(CreateActivityPage);
    }
}