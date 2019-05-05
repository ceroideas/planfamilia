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
import { EmailComposer } from '@ionic-native/email-composer';
import { VerifycodePage } from '../verifycode/verifycode';
import * as $ from 'jquery';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(emailComposer, navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.emailComposer = emailComposer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.singUp = function () {
        var _this = this;
        var apiUrl = 'https://ceroideas.es/plandefamilia/public/';
        var loader;
        var f = $('#form-register').serialize();
        $.ajax({
            url: apiUrl + 'registerUser',
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
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'Exito!',
                    subTitle: data.msj,
                    buttons: ['OK']
                }).present();
                _this.navCtrl.push(VerifycodePage, {
                    id: data.id,
                });
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
    SignupPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-signup',
            templateUrl: 'signup.html',
        }),
        __metadata("design:paramtypes", [EmailComposer, NavController, NavParams, LoadingController, AlertController])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map