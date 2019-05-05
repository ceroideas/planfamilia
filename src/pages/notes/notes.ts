import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Events, LoadingController, AlertController} from 'ionic-angular';
import { CreateNotePage } from '../create-note/create-note';
import { EditNotePage } from '../edit-note/edit-note';
import { CretelistnotePage }    from '../cretelistnote/cretelistnote';
import { EditlistnotePage }    from '../editlistnote/editlistnote';
import * as $ from 'jquery';



/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
	userDetails : any;
	userNotes : any;
    userListNotes : any;
      constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
  		var data = JSON.parse(localStorage.getItem('userAuth'));
        var not = JSON.parse(localStorage.getItem('userNotes'));
        var list = JSON.parse(localStorage.getItem('userListNotes'));
        this.userDetails = data;
        this.userNotes = not;
        this.userListNotes = list;
        this.events.subscribe('editarObjeto',(/*parametro*/)=>{
            // this.userPerOb = parametro
            this.userNotes = JSON.parse(localStorage.getItem('userNotes'));
            this.userListNotes = JSON.parse(localStorage.getItem('userListNotes'));
        })
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad NotesPage');
  	}

    createNote(){
        this.navCtrl.push(CreateNotePage);
    }

    createListNote(){
        this.navCtrl.push(CretelistnotePage);
    }

    editNote(p){
        this.navCtrl.push(EditNotePage , {
            n:p,
        });
    }

    editNoteList(p){
        this.navCtrl.push(EditlistnotePage , {
            n:p,
        });
    }

    viewNot(){
        let load;
        load = this.loadingCtrl.create({
            content: "Cargando",
        });
        load.present();
        $('.hidde-list').hide();
        $('.hidde-text').css('display' , 'block');
        load.dismiss();
    }

    viewList(){
        let load;
        load = this.loadingCtrl.create({
            content: "Cargando",
        });
        load.present();
        $('.hidde-text').hide();
        $('.hidde-list').css('display' , 'block');
        load.dismiss();
    }
}
