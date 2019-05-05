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
import * as $ from 'jquery';
/**
 * Generated class for the CretelistnotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CretelistnotePage = /** @class */ (function () {
    function CretelistnotePage(events, navCtrl, navParams) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var data = JSON.parse(localStorage.getItem('userAuth'));
        var not = JSON.parse(localStorage.getItem('userListNotes'));
        this.userDetails = data;
        this.userListNotes = not;
        this.events.subscribe('editarObjeto', function ( /*parametro*/) {
            // this.userPerOb = parametro
            _this.userListNotes = JSON.parse(localStorage.getItem('userListNotes'));
        });
    }
    CretelistnotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CretelistnotePage');
    };
    CretelistnotePage.prototype.addItem = function () {
        var c1 = $('<ion-col col-9></ion-col>').text('Esto de aqui');
        var c2 = $('<ion-col col-3></ion-col>');
        var span = $('<span></span>', {
            class: 'remove_item',
            'onclick': 'removeItem($(this))'
        }).text('Remover');
        c2.append(span);
        $('#items_here').append(c1);
        $('#items_here').append(c2);
    };
    CretelistnotePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-cretelistnote',
            templateUrl: 'cretelistnote.html',
        }),
        __metadata("design:paramtypes", [Events, NavController, NavParams])
    ], CretelistnotePage);
    return CretelistnotePage;
}());
export { CretelistnotePage };
//# sourceMappingURL=cretelistnote.js.map