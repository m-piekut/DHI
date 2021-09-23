import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map!: L.Map;
  private centroid: L.LatLngExpression = [52.3601, 21.0589]; //
  params : any = 1
  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 1,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);

  }



  constructor() { }

  ngOnInit(): void {
    //rysowanie mapy
    this.initMap();
    //dodawanie punktu na mapie
    this.map.on("click",( e : any) => {
      if(this.params == 0){
          let circle : any
        this.params = e.latlng
        circle = L.circle(e.latlng, {
          color: '#00A4EC',
          fillColor: '#fff',
          fillOpacity: 1,
          radius: 500
      }).addTo(this.map);

      }
    }
  );
}
//resetowanie parametrów punktu
addPoint(){
  this.params = 0
}
}
