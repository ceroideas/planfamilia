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
import { IonicPage, NavController, NavParams, Events, LoadingController, AlertController, ActionSheetController } from 'ionic-angular';
import * as $ from 'jquery';
/**
 * Generated class for the MyperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyperfilPage = /** @class */ (function () {
    function MyperfilPage(navCtrl, navParams, events, loadingCtrl, alertCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        var data = JSON.parse(localStorage.getItem('userAuth'));
        if (data) {
            this.userDetails = data;
        }
    }
    MyperfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyperfilPage');
    };
    MyperfilPage.prototype.editPersonalDates = function () {
        var _this = this;
        var url = 'https://ceroideas.es/plandefamilia/public/editPersoalDates';
        var dat = $('#f_e_p_d').serialize();
        var loader;
        $.ajax({
            url: url,
            type: 'POST',
            data: dat,
            beforeSend: function () {
                loader = _this.loadingCtrl.create({
                    content: "Procesando",
                });
                loader.present();
            }
        })
            .done(function (data) {
            console.log(data);
            if (data.success != true) {
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: data.msj,
                    buttons: ['OK']
                }).present();
            }
            else {
                localStorage.removeItem("userAuth");
                localStorage.setItem('userAuth', JSON.stringify(data.user));
                _this.events.publish('editarObjeto');
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'Exito!',
                    subTitle: data.msj,
                    buttons: ['OK']
                }).present();
                _this.navCtrl.pop();
            }
        })
            .fail(function () {
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
    MyperfilPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-myperfil',
            templateUrl: 'myperfil.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Events, LoadingController, AlertController, ActionSheetController])
    ], MyperfilPage);
    return MyperfilPage;
}());
export { MyperfilPage };
//# sourceMappingURL=myperfil.js.map