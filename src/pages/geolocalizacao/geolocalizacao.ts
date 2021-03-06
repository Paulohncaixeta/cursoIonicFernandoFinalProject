import { GeolocalizacaoProvider } from './../../providers/geolocalizacao/geolocalizacao';
import { Component } from '@angular/core';
import {IonicPage, NavController,  NavParams,  Platform,  ModalController,  ViewController,  ToastController,  AlertController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';



declare var google: any;

@IonicPage()
@Component({
  selector: 'page-geolocalizacao',
  templateUrl: 'geolocalizacao.html',
})
export class GeolocalizacaoPage {

  mapa: any;
  latitude: any;
  longitude: any;
  enderecoPosicao: "";

  latitudeDestino: 0;
  longitudeDestino: 0;
  enderecoDestino: any = "";

  constructor(public navCtrl: NavController,
              public geolocatioin: Geolocation,
              private alertCtrl: AlertController,
              public platform: Platform,
              public GeolocalizacaoProvider: GeolocalizacaoProvider) {
                platform.ready().then(()=>{
                  this.obterPosicao();
                });
  }

  obterPosicao():any{
    this.geolocatioin.getCurrentPosition()
      .then(res=> {
        this.latitude = res.coords.latitude;
        this.longitude = res.coords.longitude;
        this.latitude = -18.5742094;
        this.longitude = -46.513054499999996;
        this.buscarEnderecoPorCoordenadas();
        this.loadMap();
      })
      .catch(
        (error) => {
          console.log(error.message);
          this.latitude = -18.5742094;
          this.longitude = -46.513054499999996;
          this.buscarEnderecoPorCoordenadas();
          this.loadMap();
        }
      )
  }

  loadMap(){
    
    let mapContainer = document.getElementById('map');

    this.mapa = new google.maps.Map(
        mapContainer,
        {center: new google.maps.LatLng(
                    this.latitude,
                    this.longitude),
                    zoom : 14});
                  
    let marcador = new google.maps.Marker({
        icon: 'assets/imgs/iconeAqui.png',
        map: this.mapa,
        position: new google.maps.LatLng(
                    this.latitude,
                    this.longitude)
        
    });
    if(this.latitudeDestino !=0)
      {
        let marcador2 = new google.maps.Marker({
          icon: 'assets/imgs/iconeAqui.png',
          map: this.mapa,
          position: new google.maps.LatLng(
                      this.latitudeDestino,
                      this.longitudeDestino)
        });
      }
    
  }

  buscarEnderecoPorCoordenadas(){
   
    this.GeolocalizacaoProvider.buscarEndereco(this.latitude,
                                        this.longitude)
                                        .then ( retorno =>
      {
        
        console.log(retorno);
        this.enderecoPosicao = retorno;
        
      });
  }

  novoLugar(){
    
    this.enderecoDestino = "Rua Padre Caldeira, 231, Patos de Minas, MG"
    this.GeolocalizacaoProvider.buscarCoordenadas(this.enderecoDestino)
      .then (retorno => {
        this.latitudeDestino = retorno[0].geometry.location.lat();
        this.longitudeDestino = retorno[0].geometry.location.lng();
        this.loadMap();
      });
  }

  rota(){
    if (this.latitudeDestino !=0){
      let diretionsService = new google.maps.diretionsService();
      let diretionsDisplay = new google.maps.diretionsDisplay();

      let startPosition = new google.maps.LatLng(
          this.latitude,
          this.longitude
      );

      const mapOptions = {
        zoom:18,
        center: startPosition,
        disableDefaultUI: true
      };

      this.mapa = new google.maps.Map(document.getElementById('map'),
      mapOptions);
      diretionsDisplay.setMap(this.mapa);

      const marker = new google.maps.Marker({
        position: startPosition,
        map: this.mapa,
      });
      
      const request = {
        origin: new google.maps.LatLng(this.latitude, this.longitude),
          destination: new google.maps.LatLng(this.latitudeDestino, this.longitudeDestino),
          travelMode: 'DRIVING'
      };

      diretionsService.route(request, (result, status) => {
        if (status == 'ok') {
          diretionsDisplay.setDirections(result);
        }
      });
    }
  }

}
