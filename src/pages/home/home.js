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
import { NavController, NavParams, Events } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { PersonalObPage } from '../personal-ob/personal-ob';
import { DetailPErsonalObPage } from '../detail-p-ersonal-ob/detail-p-ersonal-ob';
import { CreatePersonalObPage } from '../create-personal-ob/create-personal-ob';
import { EditPersonalObPage } from '../edit-personal-ob/edit-personal-ob';
import { MyperfilPage } from '../myperfil/myperfil';
import { MyfamilyPage } from '../myfamily/myfamily';
import * as $ from 'jquery';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.rootPage = WelcomePage;
        var data = JSON.parse(localStorage.getItem('userAuth'));
        var obs = JSON.parse(localStorage.getItem('userPerOb'));
        this.userDetails = data;
        this.userPerOb = obs;
        // this.userPerOb = navParams.get("userPerOb");
        this.events.subscribe('editarObjeto', function () {
            // this.userPerOb = parametro
            _this.userPerOb = JSON.parse(localStorage.getItem('userPerOb'));
        });
    }
    HomePage.prototype.personalOb = function () {
        this.navCtrl.push(PersonalObPage);
    };
    HomePage.prototype.createPersonalOb = function () {
        this.navCtrl.push(CreatePersonalObPage);
    };
    HomePage.prototype.editOb = function (p) {
        this.navCtrl.push(EditPersonalObPage, {
            p: p,
            userDetails: this.userDetails
        });
    };
    HomePage.prototype.viewOb = function (p) {
        this.navCtrl.push(DetailPErsonalObPage, {
            p: p
        });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.navCtrl.setRoot(WelcomePage); }, 500);
    };
    HomePage.prototype.showMenu = function () {
        $('.dropdown-content').toggle();
    };
    HomePage.prototype.myPerfil = function () {
        this.navCtrl.push(MyperfilPage);
    };
    HomePage.prototype.myFamily = function () {
        this.navCtrl.push(MyfamilyPage);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Events])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map