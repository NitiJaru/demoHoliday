import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EarnPage } from '../pages/earn/earn';
import { SorryPage } from '../pages/sorry/sorry';
import { OhPage } from '../pages/oh/oh';
import { MenPage } from '../pages/men/men';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EarnPage,
    SorryPage,
    OhPage,
    MenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EarnPage,
    SorryPage,
    OhPage,
    MenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
