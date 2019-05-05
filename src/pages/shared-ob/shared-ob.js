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
import { MyperfilPage } from '../myperfil/myperfil';
import { MyfamilyPage } from '../myfamily/myfamily';
/**
 * Generated class for the SharedObPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SharedObPage = /** @class */ (function () {
    function SharedObPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SharedObPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SharedObPage');
    };
    SharedObPage.prototype.showMenu = function () {
        $('.dropdown-content').toggle();
    };
    SharedObPage.prototype.myPerfil = function () {
        this.navCtrl.push(MyperfilPage);
    };
    SharedObPage.prototype.myFamily = function () {
        this.navCtrl.push(MyfamilyPage);
    };
    SharedObPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-shared-ob',
            templateUrl: 'shared-ob.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], SharedObPage);
    return SharedObPage;
}());
export { SharedObPage };
//# sourceMappingURL=shared-ob.js.map