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
import { CreatePersonalObPage } from '../create-personal-ob/create-personal-ob';
import { DetailPErsonalObPage } from '../detail-p-ersonal-ob/detail-p-ersonal-ob';
import { EditPersonalObPage } from '../edit-personal-ob/edit-personal-ob';
import { MyperfilPage } from '../myperfil/myperfil';
import { MyfamilyPage } from '../myfamily/myfamily';
/**
 * Generated class for the PersonalObPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalObPage = /** @class */ (function () {
    function PersonalObPage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        var data = JSON.parse(localStorage.getItem('userAuth'));
        var obs = JSON.parse(localStorage.getItem('userPerOb'));
        this.userDetails = data;
        this.userPerOb = obs;
        this.events.subscribe('editarObjeto', function ( /*parametro*/) {
            // this.userPerOb = parametro
            _this.userPerOb = JSON.parse(localStorage.getItem('userPerOb'));
        });
    }
    PersonalObPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalObPage');
    };
    PersonalObPage.prototype.createPersonalOb = function () {
        this.navCtrl.push(CreatePersonalObPage);
    };
    PersonalObPage.prototype.editOb = function (p) {
        this.navCtrl.push(EditPersonalObPage, {
            p: p,
            userDetails: this.userDetails
        });
    };
    PersonalObPage.prototype.viewOb = function (p) {
        this.navCtrl.push(DetailPErsonalObPage, {
            p: p
        });
    };
    PersonalObPage.prototype.showMenu = function () {
        $('.dropdown-content').toggle();
    };
    PersonalObPage.prototype.myPerfil = function () {
        this.navCtrl.push(MyperfilPage);
    };
    PersonalObPage.prototype.myFamily = function () {
        this.navCtrl.push(MyfamilyPage);
    };
    PersonalObPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-personal-ob',
            templateUrl: 'personal-ob.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Events])
    ], PersonalObPage);
    return PersonalObPage;
}());
export { PersonalObPage };
//# sourceMappingURL=personal-ob.js.map