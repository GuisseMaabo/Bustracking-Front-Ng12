import { Component, TemplateRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.scss']
})
export class ElevesComponent {
  readonly position = { lat: 51.678418, lng: 7.809007 };

  users: { name: string, title: string }[] = [
    { name: 'Amadou Ndiaye', title: 'Maison de a Sagesse ' },
    { name: 'Abdalah Ndiaye', title: 'Notre Dame du liban' },
    { name: 'Fatima Ba ', title: 'Cours Sacrée Coeur' },
    { name: 'Aicha Guisse', title: 'Anne Marie Javouey' },
    { name: 'Ibrahim Diop ', title: 'SABS' }];

    vehicules: { namev: string, titlev: string , position:string, traffic: string , Heure_Arr_Prevu: string , Matricule: string  }[] = [
      { namev: 'Ecole : Maison de la sagesse', titlev: 'Chauffeur: Issakha ',
      position: 'position: Cité des eaux', traffic:' Traffic: Cité des eaux',
      Heure_Arr_Prevu:' Heure Arrivée Prévu: 18h30', Matricule:'Matricule: dk-xxxx-yy' },
      ];

      options = {
        layers: [
          L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 5, attribution: '...' }),
        ],
        zoom: 5,
        center: L.latLng({ lat: 14.7105714, lng: -17.4565405 }),
      };

lat = 22.4064172;
long = 69.0750171;
zoom=7;

      markers = [
        {
            lat: 21.1594627,
            lng: 72.6822083,
            label: 'voiture 1 '
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
    

}
