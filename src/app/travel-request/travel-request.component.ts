import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.css']
})
export class TravelRequestComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line: no-inferrable-types
  passengers: number;
  price: number;

  // tslint:disable-next-line: typedef
  public calculatePrice() {
    if (isNaN(this.passengers)){
        this.passengers = 0;
    }
    this.passengers = +this.passengers;
    console.log(this.passengers);
    this.price = 150 * this.passengers;
}

  ngOnInit(): void {
  }


}
