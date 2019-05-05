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
 * Generated class for the EditNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditNotePage = /** @class */ (function () {
    function EditNotePage(navCtrl, navParams, events, loadingCtrl, alertCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.n = navParams.get("n");
    }
    EditNotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditNotePage');
    };
    EditNotePage.prototype.editTextNote = function () {
        var _this = this;
        var url = 'https://ceroideas.es/plandefamilia/public/editTextNote';
        var dat = $('#form_edit_note').serialize();
        console.log(dat);
        var loader;
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
                localStorage.removeItem("userNotes");
                /*let parametro = */ localStorage.setItem('userNotes', JSON.stringify(data.notes));
                // this.events.publish('editarObjeto',(parametro)); puedes usarlo asi y pasar el parametro
                _this.events.publish('editarObjeto');
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'Exito!',
                    subTitle: 'Nota de texto editada exitosamente',
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
    EditNotePage.prototype.deleteTextNote = function () {
        var _this = this;
        var url = 'https://ceroideas.es/plandefamilia/public/deleteTextNote/' + this.n.id;
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
                localStorage.removeItem("userNotes");
                localStorage.setItem('userNotes', JSON.stringify(data.notes));
                // this.events.publish('editarObjeto',(parametro)); puedes usarlo asi y pasar el parametro
                _this.events.publish('editarObjeto');
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'Exito!',
                    subTitle: 'Nota de texto eliminada exitosamente',
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
    EditNotePage.prototype.delNote = function () {
        var _this = this;
        this.actionSheetCtrl.create({
            title: 'Seguro de eliminar esta nota de texto?',
            buttons: [
                {
                    text: 'Confirmar',
                    role: 'destructive',
                    handler: function () {
                        _this.deleteTextNote();
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
    EditNotePage.prototype.showMenu = function () {
        $('.dropdown-content').toggle();
    };
    EditNotePage.prototype.myPerfil = function () {
        this.navCtrl.push(MyperfilPage);
    };
    EditNotePage.prototype.myFamily = function () {
        this.navCtrl.push(MyfamilyPage);
    };
    EditNotePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-edit-note',
            templateUrl: 'edit-note.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Events, LoadingController, AlertController, ActionSheetController])
    ], EditNotePage);
    return EditNotePage;
}());
export { EditNotePage };
//# sourceMappingURL=edit-note.js.map