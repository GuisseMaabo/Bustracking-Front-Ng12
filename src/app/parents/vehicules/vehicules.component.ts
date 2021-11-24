import { Component } from '@angular/core';
import * as L from 'leaflet';
import { GoogleMapsModule } from '@angular/google-maps';


@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.scss']
})
export class VehiculesComponent  {
  readonly position = { lat: 51.678418, lng: 7.809007 };
  lat = 51.678418;
  lng = 7.809007;

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


}
