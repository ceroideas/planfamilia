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
import { MyperfilPage } from '../myperfil/myperfil';
import { MyfamilyPage } from '../myfamily/myfamily';
import * as $ from 'jquery';
/**
 * Generated class for the EditPersonalObPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPersonalObPage = /** @class */ (function () {
    function EditPersonalObPage(navCtrl, navParams, events, loadingCtrl, alertCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.p = navParams.get("p");
        this.userDetails = navParams.get("userDetails");
    }
    EditPersonalObPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPersonalObPage');
    };
    EditPersonalObPage.prototype.goHome = function () {
        this.navCtrl.pop();
    };
    EditPersonalObPage.prototype.editPersonalOb = function () {
        var _this = this;
        var url = 'https://ceroideas.es/plandefamilia/public/editPersonalOb';
        var dat = $('#form_edit_p_o').serialize();
        var loader;
        console.log(dat);
        $.ajax({
            url: url,
            type: 'POST',
            data: dat,
            beforeSend: function () {
                loader = _this.loadingCtrl.create({
                    content: "Editando",
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
                /*let parametro = */ localStorage.setItem('userPerOb', JSON.stringify(data.p_o));
                _this.events.publish('editarObjeto');
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'Exito!',
                    subTitle: 'Objetivo personal editado exitosamente',
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
    EditPersonalObPage.prototype.deletePerOb = function () {
        var _this = this;
        var url = 'https://ceroideas.es/plandefamilia/public/deletePerOb/' + this.p.id;
        var loader;
        $.ajax({
            url: url,
            type: 'GET',
            data: {},
            beforeSend: function () {
                loader = _this.loadingCtrl.create({
                    content: "Eliminando",
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
                // this.events.publish('editarObjeto',(parametro)); puedes usarlo asi y pasar el parametro
                _this.events.publish('editarObjeto');
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'Exito!',
                    subTitle: 'Objetivo personal eliminado exitosamente',
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
    EditPersonalObPage.prototype.PerOb = function () {
        var _this = this;
        this.actionSheetCtrl.create({
            title: 'Seguro de eliminar este objetivo personal?',
            buttons: [
                {
                    text: 'Confirmar',
                    role: 'destructive',
                    handler: function () {
                        _this.deletePerOb();
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
    EditPersonalObPage.prototype.showMenu = function () {
        $('.dropdown-content').toggle();
    };
    EditPersonalObPage.prototype.myPerfil = function () {
        this.navCtrl.push(MyperfilPage);
    };
    EditPersonalObPage.prototype.myFamily = function () {
        this.navCtrl.push(MyfamilyPage);
    };
    EditPersonalObPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-edit-personal-ob',
            templateUrl: 'edit-personal-ob.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Events, LoadingController, AlertController, ActionSheetController])
    ], EditPersonalObPage);
    return EditPersonalObPage;
}());
export { EditPersonalObPage };
//# sourceMappingURL=edit-personal-ob.js.map