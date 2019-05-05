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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConditionsPage } from '../conditions/conditions';
import { PrivacyPage } from '../privacy/privacy';
import { MyperfilPage } from '../myperfil/myperfil';
import { MyfamilyPage } from '../myfamily/myfamily';
/**
 * Generated class for the AbourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AbourPage = /** @class */ (function () {
    function AbourPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AbourPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbourPage');
    };
    AbourPage.prototype.privacy = function () {
        this.navCtrl.push(PrivacyPage);
    };
    AbourPage.prototype.conditions = function () {
        this.navCtrl.push(ConditionsPage);
    };
    AbourPage.prototype.showMenu = function () {
        $('.dropdown-content').toggle();
    };
    AbourPage.prototype.myPerfil = function () {
        this.navCtrl.push(MyperfilPage);
    };
    AbourPage.prototype.myFamily = function () {
        this.navCtrl.push(MyfamilyPage);
    };
    AbourPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-abour',
            templateUrl: 'abour.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], AbourPage);
    return AbourPage;
}());
export { AbourPage };
//# sourceMappingURL=abour.js.map