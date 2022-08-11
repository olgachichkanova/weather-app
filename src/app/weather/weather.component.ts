import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input() city: string = '';
  @Input() country: string = '';
  @Input() weather: string = '';
  @Input() forecastToday: any[] = [];
  @Input() forecastTomorrow: any[] = [];
  @Input() forecast: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
