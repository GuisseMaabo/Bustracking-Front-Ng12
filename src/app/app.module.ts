import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';



import { AppComponent } from './app.component';
import { NbThemeModule, NbSidebarModule, NbCardModule, NbStepperModule, NbButtonModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ParentsModule } from './parents/parents.module';
import { GoogleMapsModule } from '@angular/google-maps';

import { SidebarComponent } from './parents/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { VehiculesComponent } from './parents/vehicules/vehicules.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    VehiculesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
