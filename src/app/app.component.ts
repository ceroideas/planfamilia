import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage }       from '../pages/home/home';
import { ListPage }       from '../pages/list/list';
import { WelcomePage }    from '../pages/welcome/welcome';
import { PersonalObPage } from '../pages/personal-ob/personal-ob';
import { NotesPage } from '../pages/notes/notes';
import { CreateNotePage } from '../pages/create-note/create-note';
import { BlogPage } from '../pages/blog/blog';
import { AbourPage } from '../pages/abour/abour';
import { ConditionsPage } from '../pages/conditions/conditions';
import { PrivacyPage } from '../pages/privacy/privacy';
import { LoginPage } from '../pages/login/login';
import { CalendarPage } from '../pages/calendar/calendar';
import { SharedObPage } from '../pages/shared-ob/shared-ob';
import { NotificationsPage } from '../pages/notifications/notifications';

import * as $ from 'jquery';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = WelcomePage;

    pages: Array<{title: string, component: any}>;

    userDetails : any;
  
    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        var data = JSON.parse(localStorage.getItem('userAuth'));
        if(data){
            this.userDetails = data;
        }
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'List', component: ListPage },
            { title: 'Personal', component: PersonalObPage }
        ];
  }

  initializeApp() { 
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    backToWelcome(){
        this.nav.setRoot(WelcomePage);
    }

    logout(){
        localStorage.clear();
        setTimeout(() => this.backToWelcome(), 1000);
    }

    personalOb(){
        this.nav.push(PersonalObPage);
    }

    blog(){
        this.nav.push(BlogPage);
    }

    notes(){
        this.nav.push(NotesPage);
    }

    about(){
        this.nav.push(AbourPage);
    }

    privacy(){
        this.nav.push(PrivacyPage);
    }

    conditions(){
        this.nav.push(ConditionsPage);
    }

    calendar(){
        this.nav.push(CalendarPage);
    }

    sharedOb(){
        this.nav.push(SharedObPage);
    }

    notifications(){
        this.nav.push(NotificationsPage);
    }
}
