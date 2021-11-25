import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nebular';
  /*latitude: any;
  longitude: any;
  zoom: number = 0;
  address: string = '';
  private geoCoder: any;*/
  /* ancienne version */
  /*
  lat = 51.678418;
  lng = 7.809007;
*/

lat = 22.4064172;
long = 69.0750171;
zoom=7;



  /* ancienne version */
  /*
  lat = 51.678418;
  lng = 7.809007;
  */

  
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

isShowDiv = false;
   
toggleDisplayDiv() {
  this.isShowDiv = !this.isShowDiv;
}
/*
  @ViewChild('search')
  public searchElementRef!: ElementRef;
  
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }
  
  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
    });
  }
  
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }
  
  getAddress(latitude:number, longitude:number) : any {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results: any, status:string) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    
    });
  }
  */

}
