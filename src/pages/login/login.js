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
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import * as $ from 'jquery';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.logForm = function () {
        var _this = this;
        var apiUrl = 'http://localhost/plandefamilia/public/';
        var loader;
        var f = $('#form-login').serialize();
        $.ajax({
            url: apiUrl + 'auth',
            type: 'POST',
            data: f,
            beforeSend: function () {
                loader = _this.loadingCtrl.create({
                    content: "Procesando",
                });
                loader.present();
            }
        })
            .done(function (data) {
            // console.log(data);
            if (data.success != true) {
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: data.msj,
                    buttons: ['OK']
                }).present();
            }
            else {
                localStorage.setItem('userAuth', JSON.stringify(data.user));
                localStorage.setItem('userPerOb', JSON.stringify(data.p_o));
                localStorage.setItem('userNotes', JSON.stringify(data.notes));
                localStorage.setItem('userListNotes', JSON.stringify(data.list_notes));
                if (data.privacy) {
                    localStorage.setItem('privacy', JSON.stringify(data.privacy));
                }
                if (data.conditions) {
                    localStorage.setItem('conditions', JSON.stringify(data.conditions));
                }
                localStorage.setItem('news', JSON.stringify(data.news));
                loader.dismiss();
                _this.goHome();
            }
        })
            .fail(function (r) {
            loader.dismiss();
            _this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Error al procesar los datos, intente mas tarde',
                buttons: ['OK']
            }).present();
        })
            .always(function () {
            console.log("complete");
        });
    };
    LoginPage.prototype.goHome = function () {
        this.navCtrl.setRoot(HomePage);
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, LoadingController, AlertController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map