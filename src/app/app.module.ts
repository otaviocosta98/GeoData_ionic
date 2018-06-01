import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatabaseProvider } from '../providers/database/database';
import { PaisProvider } from '../providers/pais/pais';
import { AdicionaPaisPageModule } from '../pages/adiciona-pais/adiciona-pais.module';
import { ExibePaisesPageModule } from '../pages/exibe-paises/exibe-paises.module';
import { AtualizaPaisPageModule } from '../pages/atualiza-pais/atualiza-pais.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AdicionaPaisPageModule,
    ExibePaisesPageModule,
    AtualizaPaisPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    PaisProvider
  ]
})
export class AppModule {}
