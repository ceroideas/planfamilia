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
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ActionSheetController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { WelcomePage } from '../welcome/welcome';
import * as $ from 'jquery';
/**
 * Generated class for the VerifycodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifycodePage = /** @class */ (function () {
    function VerifycodePage(actionSheetCtrl, emailComposer, navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.emailComposer = emailComposer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.id = navParams.get("id");
    }
    VerifycodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifycodePage');
    };
    VerifycodePage.prototype.activate = function () {
        var _this = this;
        var apiUrl = 'https://ceroideas.es/plandefamilia/public/';
        var loader;
        var f = $('#form-activate').serialize();
        console.log(f);
        $.ajax({
            url: apiUrl + 'activateUser',
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
                _this.navCtrl.setRoot(WelcomePage);
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
    VerifycodePage.prototype.resendCodeConfirm = function () {
        var _this = this;
        this.actionSheetCtrl.create({
            title: 'Seguro de reenviar el codigo?',
            buttons: [
                {
                    text: 'Confirmar',
                    role: 'destructive',
                    handler: function () {
                        _this.resendCode();
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancelado');
                    }
                }
            ]
        }).present();
    };
    VerifycodePage.prototype.resendCode = function () {
        var _this = this;
        var apiUrl = 'https://ceroideas.es/plandefamilia/public/resendCode/' + this.id;
        var loader;
        $.ajax({
            url: apiUrl,
            type: 'GET',
            data: {},
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
    VerifycodePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-verifycode',
            templateUrl: 'verifycode.html',
        }),
        __metadata("design:paramtypes", [ActionSheetController, EmailComposer, NavController, NavParams, LoadingController, AlertController])
    ], VerifycodePage);
    return VerifycodePage;
}());
export { VerifycodePage };
//# sourceMappingURL=verifycode.js.map