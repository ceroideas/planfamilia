import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { HttpModule } from '@angular/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { PersonalObPage } from '../pages/personal-ob/personal-ob';
import { CreatePersonalObPage } from '../pages/create-personal-ob/create-personal-ob';
import { DetailPErsonalObPage } from '../pages/detail-p-ersonal-ob/detail-p-ersonal-ob';
import { EditPersonalObPage } from '../pages/edit-personal-ob/edit-personal-ob';
import { NotesPage } from '../pages/notes/notes';
import { CreateNotePage } from '../pages/create-note/create-note';
import { EditNotePage } from '../pages/edit-note/edit-note';
import { BlogPage } from '../pages/blog/blog';
import { DetailNewPage } from '../pages/detail-new/detail-new';
import { AbourPage } from '../pages/abour/abour';
import { ConditionsPage } from '../pages/conditions/conditions';
import { PrivacyPage } from '../pages/privacy/privacy';
import { Calendar } from '@ionic-native/calendar';
import { EmailComposer } from '@ionic-native/email-composer';
import { VerifycodePage } from '../pages/verifycode/verifycode';
import { CalendarPage } from '../pages/calendar/calendar';
import { SharedObPage } from '../pages/shared-ob/shared-ob';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MyfamilyPage } from '../pages/myfamily/myfamily';
import { MyperfilPage } from '../pages/myperfil/myperfil';
import { CretelistnotePage }    from '../pages/cretelistnote/cretelistnote';
import { EditlistnotePage }    from '../pages/editlistnote/editlistnote';
import { CreateFamilyPage }    from '../pages/create-family/create-family';
import { CreateSharedObjetivePage }    from '../pages/create-shared-objetive/create-shared-objetive';
import { EditSharedObjetivePage }    from '../pages/edit-shared-objetive/edit-shared-objetive';
import { DetailSharedObjetivePage }    from '../pages/detail-shared-objetive/detail-shared-objetive';
import { CreateActivityPage }    from '../pages/create-activity/create-activity';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    PersonalObPage,
    CreatePersonalObPage,
    DetailPErsonalObPage,
    EditPersonalObPage,
    NotesPage,
    CreateNotePage,
    EditNotePage,
    BlogPage,
    DetailNewPage,
    AbourPage,
    ConditionsPage,
    PrivacyPage,
    VerifycodePage,CalendarPage,SharedObPage,NotificationsPage,MyperfilPage,MyfamilyPage,
    CretelistnotePage,EditlistnotePage,CreateFamilyPage,CreateSharedObjetivePage,EditSharedObjetivePage,
    DetailSharedObjetivePage,CreateActivityPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    PersonalObPage,
    CreatePersonalObPage,
    DetailPErsonalObPage,
    EditPersonalObPage,
    NotesPage,
    CreateNotePage,
    EditNotePage,
    BlogPage,
    DetailNewPage,
    AbourPage,
    ConditionsPage,
    PrivacyPage,
    VerifycodePage,CalendarPage,SharedObPage,NotificationsPage,MyperfilPage,MyfamilyPage,
    CretelistnotePage,EditlistnotePage,CreateFamilyPage,CreateSharedObjetivePage,EditSharedObjetivePage,
    DetailSharedObjetivePage,CreateActivityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,Calendar,EmailComposer
  ]
})
export class AppModule {
    
}
