import { Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import * as L from 'leaflet';
import { GoogleMapsModule, MapMarker } from '@angular/google-maps';
import { Markers } from '../../markers';
import { MARKERS } from '../../mock-markers'


@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.scss']
})
export class VehiculesComponent  {
  readonly position = { lat: 51.678418, lng: 7.809007 };
  //lat = 51.678418;
  //lng = 7.809007;

  users: { name: string, title: string }[] = [
    { name: 'Amadou', title: 'CP' },
    { name: 'Abdalah', title: 'CI' },
    { name: 'Fatima', title: 'Papillon' },
    { name: 'Aicha', title: 'libellule' },
    { name: 'Ibrahim', title: 'CE' }];


    options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 5, attribution: '...' }),
      ],
      zoom: 8,
      center: L.latLng({ lat: 14.7105714, lng: -17.4565405 }),
    };


  
   

lat = 22.4064172;
long = 69.0750171;
zoom=7;

public show:boolean = false;
public markerName:any = 'Show';

  /* ancienne version */
  /*
  lat = 51.678418;
  lng = 7.809007;
  */

  /*
  markers = [
    {
        lat: 21.1594627,
        lng: 72.6822083,
        label: 'voiture 1'
    },
    {
        lat: 23.0204978,
        lng: 72.4396548,
        label: 'voiture 2 '
    },
    {
        lat: 22.2736308,
        lng: 70.7512555,
        label: 'voiture 3'
    }
];
*/
markers = MARKERS;

selectedpoint  ?: Markers;

toggle(selectedMarker: Markers): void {
  this.show = !this.show;

  // CHANGE THE NAME OF THE BUTTON.
  if(this.show)  
    this.markerName = "Hide";
  else
    this.markerName = "Show";
    //  alert("");
    this.selectedpoint = selectedMarker;
   //console.log("Selected item Id: ", selectedMarker.label);
  

}



}

