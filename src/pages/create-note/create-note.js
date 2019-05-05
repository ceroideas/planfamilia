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
 * Generated class for the CreateNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateNotePage = /** @class */ (function () {
    function CreateNotePage(navCtrl, navParams, events, loadingCtrl, alertCtrl, actionSheetCtrl) {
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
    CreateNotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateNotePage');
    };
    CreateNotePage.prototype.addTextNote = function () {
        var _this = this;
        var url = 'https://ceroideas.es/plandefamilia/public/addTextNote';
        var dat = $('#form_add_note').serialize();
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
                localStorage.removeItem("userNotes");
                localStorage.setItem('userNotes', JSON.stringify(data.notes));
                _this.events.publish('editarObjeto');
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'Exito!',
                    subTitle: 'Nota de texto registrada exitosamente',
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
    CreateNotePage.prototype.showMenu = function () {
        $('.dropdown-content').toggle();
    };
    CreateNotePage.prototype.myPerfil = function () {
        this.navCtrl.push(MyperfilPage);
    };
    CreateNotePage.prototype.myFamily = function () {
        this.navCtrl.push(MyfamilyPage);
    };
    CreateNotePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-create-note',
            templateUrl: 'create-note.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Events, LoadingController, AlertController, ActionSheetController])
    ], CreateNotePage);
    return CreateNotePage;
}());
export { CreateNotePage };
//# sourceMappingURL=create-note.js.map