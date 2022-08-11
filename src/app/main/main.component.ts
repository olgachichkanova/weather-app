import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  date!: string;
  location: string = '';
  
  city: string = '';
  country: string = '';
  currentWeather:string = '';
  forecastToday: any[] = [];
  forecastTomorrow: any[] = [];
  forecast: any[] = [];
  time!: Date;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.date = moment().format('MMMM Do YYYY')
    this.time = new Date();
  }

  onSubmit() {
    const req = this.location.replace(/[^A-Za-z]/g, '').trim().toLowerCase();
    this.weatherService.getWeather(req).subscribe(res => {
      this.city = res.location.name;
      this.country = res.location.country;
      this.currentWeather = res.current.temp_c;
      this.forecastToday = res.forecast.forecastday[0].hour.filter((item: { time: string | number | Date; }) => new Date(item.time) > this.time);
      this.forecastTomorrow = res.forecast.forecastday[1].hour.filter((item: any, i: number)=>i%2!==1);
      this.forecast = res.forecast.forecastday;
    })
  }

}
 