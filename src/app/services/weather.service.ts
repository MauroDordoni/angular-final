import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'f245b5575aaab671619f407dd6a3aceb';
  url: string = '';

  constructor(private http: HttpClient) {
    this.url = 'https://api.openweathermap.org/data/2.5/weather?appid='+(this.apiKey)+'&q=';
  }

  getWeather(cityName: string) {
    return this.http.get((this.url)+(cityName));

  }

}
