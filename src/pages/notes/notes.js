var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { CreateNotePage } from '../create-note/create-note';
import { EditNotePage } from '../edit-note/edit-note';
import { CretelistnotePage } from '../cretelistnote/cretelistnote';
/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotesPage = /** @class */ (function () {
    function NotesPage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        var data = JSON.parse(localStorage.getItem('userAuth'));
        var not = JSON.parse(localStorage.getItem('userNotes'));
        var list = JSON.parse(localStorage.getItem('userListNotes'));
        this.userDetails = data;
        this.userNotes = not;
        this.userListNotes = list;
        this.events.subscribe('editarObjeto', function ( /*parametro*/) {
            // this.userPerOb = parametro
            _this.userNotes = JSON.parse(localStorage.getItem('userNotes'));
            _this.userListNotes = JSON.parse(localStorage.getItem('userListNotes'));
        });
    }
    NotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotesPage');
    };
    NotesPage.prototype.createNote = function () {
        this.navCtrl.push(CreateNotePage);
    };
    NotesPage.prototype.createListNote = function () {
        this.navCtrl.push(CretelistnotePage);
    };
    NotesPage.prototype.editNote = function (p) {
        this.navCtrl.push(EditNotePage, {
            n: p,
        });
    };
    NotesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-notes',
            templateUrl: 'notes.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Events])
    ], NotesPage);
    return NotesPage;
}());
export { NotesPage };
//# sourceMappingURL=notes.js.map