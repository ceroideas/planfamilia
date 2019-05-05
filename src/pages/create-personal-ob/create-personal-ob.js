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
import { IonicPage, NavController, NavParams, Events, LoadingController, AlertController } from 'ionic-angular';
import { MyperfilPage } from '../myperfil/myperfil';
import { MyfamilyPage } from '../myfamily/myfamily';
import * as $ from 'jquery';
/**
 * Generated class for the CreatePersonalObPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatePersonalObPage = /** @class */ (function () {
    function CreatePersonalObPage(navCtrl, navParams, events, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        var data = JSON.parse(localStorage.getItem('userAuth'));
        if (data) {
            this.userDetails = data;
        }
    }
    CreatePersonalObPage.prototype.goHome = function () {
        var p_o = JSON.parse(localStorage.getItem('userPerOb'));
        this.navCtrl.pop();
    };
    CreatePersonalObPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatePersonalObPage');
    };
    CreatePersonalObPage.prototype.addPersonalOb = function () {
        var _this = this;
        var url = 'https://ceroideas.es/plandefamilia/public/addPersonalOb';
        var dat = $('#form_add_p_o').serialize();
        var loader;
        $.ajax({
            url: url,
            type: 'POST',
            data: dat,
            beforeSend: function () {
                loader = _this.loadingCtrl.create({
                    content: "Registrando",
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
                localStorage.removeItem("userPerOb");
                localStorage.setItem('userPerOb', JSON.stringify(data.p_o));
                _this.events.publish('editarObjeto');
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'Exito!',
                    subTitle: 'Objetivo personal registrado exitosamente',
                    buttons: ['OK']
                }).present();
                _this.navCtrl.pop();
            }
        })
            .fail(function (r) {
            alert(r);
        })
            .always(function () {
            console.log("complete");
        });
    };
    CreatePersonalObPage.prototype.showMenu = function () {
        $('.dropdown-content').toggle();
    };
    CreatePersonalObPage.prototype.myPerfil = function () {
        this.navCtrl.push(MyperfilPage);
    };
    CreatePersonalObPage.prototype.myFamily = function () {
        this.navCtrl.push(MyfamilyPage);
    };
    CreatePersonalObPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-create-personal-ob',
            templateUrl: 'create-personal-ob.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Events, LoadingController, AlertController])
    ], CreatePersonalObPage);
    return CreatePersonalObPage;
}());
export { CreatePersonalObPage };
//# sourceMappingURL=create-personal-ob.js.map