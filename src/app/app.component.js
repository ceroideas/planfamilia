var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WelcomePage } from '../pages/welcome/welcome';
import { PersonalObPage } from '../pages/personal-ob/personal-ob';
import { NotesPage } from '../pages/notes/notes';
import { BlogPage } from '../pages/blog/blog';
import { AbourPage } from '../pages/abour/abour';
import { ConditionsPage } from '../pages/conditions/conditions';
import { PrivacyPage } from '../pages/privacy/privacy';
import { CalendarPage } from '../pages/calendar/calendar';
import { SharedObPage } from '../pages/shared-ob/shared-ob';
import { NotificationsPage } from '../pages/notifications/notifications';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = WelcomePage;
        this.initializeApp();
        var data = JSON.parse(localStorage.getItem('userAuth'));
        if (data) {
            this.userDetails = data;
        }
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'List', component: ListPage },
            { title: 'Personal', component: PersonalObPage }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.backToWelcome = function () {
        this.nav.setRoot(WelcomePage);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    MyApp.prototype.personalOb = function () {
        this.nav.push(PersonalObPage);
    };
    MyApp.prototype.blog = function () {
        this.nav.push(BlogPage);
    };
    MyApp.prototype.notes = function () {
        this.nav.push(NotesPage);
    };
    MyApp.prototype.about = function () {
        this.nav.push(AbourPage);
    };
    MyApp.prototype.privacy = function () {
        this.nav.push(PrivacyPage);
    };
    MyApp.prototype.conditions = function () {
        this.nav.push(ConditionsPage);
    };
    MyApp.prototype.calendar = function () {
        this.nav.push(CalendarPage);
    };
    MyApp.prototype.sharedOb = function () {
        this.nav.push(SharedObPage);
    };
    MyApp.prototype.notifications = function () {
        this.nav.push(NotificationsPage);
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map