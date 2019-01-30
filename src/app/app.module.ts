import { BookdetailPage } from './../pages/bookdetail/bookdetail';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FriendrestProvider } from '../providers/friendrest/friendrest';
import { FrienddeteilPage } from '../pages/frienddeteil/frienddeteil';
import { FriendlistPage } from '../pages/friendlist/friendlist';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FriendlistPage,
    FrienddeteilPage,
    FriendlistPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FrienddeteilPage,
    FriendlistPage,
    FrienddeteilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FriendrestProvider,
    FriendrestProvider
  ]
})
export class AppModule {}
