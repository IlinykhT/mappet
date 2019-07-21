import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";

@Component ({
  selector: 'app-map',
  templateUrl: './leafmap.component.html',
  styleUrls: ['./leafmap.component.css']
})

export class LeafmapComponent {

  lat = 0;
  lng = 0;

  lat_init = 56.007;
  lng_init = 92.870;

  ngOnInit() {
    var map 	   = L.map('map').setView([this.lat_init, this.lng_init], 15),
        myIcon     = L.icon({iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'}),
        marker 	   = L.marker(map.getCenter(),{icon: myIcon}).addTo(map),
        onMapClick = (e) => {
	  marker.setLatLng(e.latlng);
          this.lat = e.latlng.lat;
          this.lng = e.latlng.lng;
        }
	
 
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

    map.on('click',onMapClick);

  }

}

