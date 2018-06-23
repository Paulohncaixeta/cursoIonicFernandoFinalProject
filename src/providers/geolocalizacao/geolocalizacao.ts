import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GeolocalizacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeolocalizacaoProvider {

  constructor() {
    console.log('Hello GeoAulaProvider Provider');
  }

  buscarEndereco(lat, lng): any{
    var geocoder = new google.maps.Geocoder();
    return new Promise(function (resolve, reject)
    {
      geocoder.geocode({'location': new google.maps.LatLng(
        lat,lng)}, function(results,status){
          if(status == google.maps.GeocoderStatus.OK)
          {
            resolve(results[0]['formatted_address']);
          }
          else {
            reject(status);
          }
        });
    });
  }

  buscarCoordenadas(endereco): any{
    var geocoder = new google.maps.Geocoder();
    return new Promise(function (resolve, reject)
    {
      geocoder.geocode({'address': endereco}, function(results,status){
          if(status == google.maps.GeocoderStatus.OK)
          {
            resolve(results);
          }
          else {
            reject(status);
          }
        });
    });
  }

}