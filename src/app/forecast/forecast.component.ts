import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  @Input() forecast:any[] = [];
  @Input() isDaily?:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
