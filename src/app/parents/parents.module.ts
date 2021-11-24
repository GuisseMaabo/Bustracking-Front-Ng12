import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { NbActionsModule, NbCardModule, NbLayoutModule, NbListModule, NbSidebarModule, NbUserModule, NbToggleModule } from '@nebular/theme';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ElevesComponent } from './eleves/eleves.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [ParentComponent,  ElevesComponent, VehiculesComponent],
  imports: [
    CommonModule,
    NbActionsModule,
    NbCardModule,
    NbSidebarModule,
    NbLayoutModule,
    NbListModule,
    NbUserModule,
    GoogleMapsModule,
    LeafletModule,
    NbToggleModule,



  ],
  exports: [
    ParentComponent,
    //SidebarComponent,
    ElevesComponent,
    VehiculesComponent

  ],
})
export class ParentsModule { }
