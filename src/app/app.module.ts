import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbCardModule, NbStepperModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ParentsModule } from './parents/parents.module';
import { GoogleMapsModule } from '@angular/google-maps';

import { SidebarComponent } from './parents/sidebar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    FormsModule,
    HttpClientModule,
    ParentsModule,
    NbSidebarModule.forRoot(),
    GoogleMapsModule,
    NbCardModule,
    NbStepperModule,
    NbButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC__5XKQLTE_t0SxOTV3_NI26yzDcqoPKY'
   })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
