import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {

  }

  getWeather(cityName: string) {
    this.weatherService.getWeather(cityName)
    .subscribe(
      res => console.log(res)
    )

  }

  submitLocation(cityName:HTMLInputElement) {
    this.getWeather(cityName.value);

    console.log(cityName.value);
    cityName.value= '';
    cityName.focus();
    return false;
  }


}
