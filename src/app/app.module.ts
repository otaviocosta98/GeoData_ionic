import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AfricaPage } from '../pages/africa/africa';
import { AmericaPage } from '../pages/america/america';
import { AsiaPage } from '../pages/asia/asia';
import { EuropaPage } from '../pages/europa/europa';
import { OceaniaPage } from '../pages/oceania/oceania';
import { AfricaDoSulPage } from '../pages/africa-do-sul/africa-do-sul';
import { EgitoPage } from '../pages/egito/egito';
import { CongoPage } from '../pages/congo/congo';
import { MadagascarPage } from '../pages/madagascar/madagascar';
import { NigeriaPage } from '../pages/nigeria/nigeria';
import { BrasilPage } from '../pages/brasil/brasil';
import { ArgentinaPage } from '../pages/argentina/argentina';
import { ChilePage } from '../pages/chile/chile';
import { UsaPage } from '../pages/usa/usa';
import { UruguaiPage } from '../pages/uruguai/uruguai';
import { JapaoPage } from '../pages/japao/japao';
import { CoreiaPage } from '../pages/coreia/coreia';
import { TailandiaPage } from '../pages/tailandia/tailandia';
import { IndiaPage } from '../pages/india/india';
import { ChinaPage } from '../pages/china/china';
import { FrancaPage } from '../pages/franca/franca';
import { AlemanhaPage } from '../pages/alemanha/alemanha';
import { FinlandiaPage } from '../pages/finlandia/finlandia';
import { DinamarcaPage } from '../pages/dinamarca/dinamarca';
import { InglaterraPage } from '../pages/inglaterra/inglaterra';
import { AustraliaPage } from '../pages/australia/australia';
import { NovaZelandiaPage } from '../pages/nova-zelandia/nova-zelandia';
import { FujiPage } from '../pages/fuji/fuji';
import { SamoaPage } from '../pages/samoa/samoa';
import { IndonesiaPage } from '../pages/indonesia/indonesia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AfricaPage,
    AmericaPage,
    AsiaPage,
    EuropaPage,
    OceaniaPage,
    AfricaDoSulPage,
    EgitoPage,
    CongoPage,
    MadagascarPage,
    NigeriaPage,
    BrasilPage,
    ArgentinaPage,
    ChilePage,
    UsaPage,
    UruguaiPage,
    CoreiaPage,
    TailandiaPage,
    IndiaPage,
    ChinaPage,
    JapaoPage,
    FrancaPage,
    AlemanhaPage,
    FinlandiaPage,
    DinamarcaPage,
    InglaterraPage,
    NovaZelandiaPage,
    FujiPage,
    SamoaPage,
    IndonesiaPage,
    AustraliaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AfricaPage,
    AmericaPage,
    AsiaPage,
    EuropaPage,
    OceaniaPage,
    AfricaDoSulPage,
    EgitoPage,
    CongoPage,
    MadagascarPage,
    NigeriaPage,
    BrasilPage,
    ArgentinaPage,
    ChilePage,
    UsaPage,
    UruguaiPage,
    JapaoPage,
    CoreiaPage,
    TailandiaPage,
    IndiaPage,
    ChinaPage,
    FrancaPage,
    AlemanhaPage,
    FinlandiaPage,
    DinamarcaPage,
    InglaterraPage,
    AustraliaPage,
    NovaZelandiaPage,
    FujiPage,
    SamoaPage,
    IndonesiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
