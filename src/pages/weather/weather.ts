import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})

@Injectable()
export class WeatherProvider {
  apiKey = '0f65400a95fc1641b76d0696124d3cb1';
  url;

  constructor(public http: Http){
    console.log("Hello WeatherProvider provider");
    this.url = "api.openweathermap.org/data/2.5/forecast?id=5128638&APPID="+this.apiKey;
  }

  getWeather(city, state){
    return this.http.get(this.url+'/')
  }
}
