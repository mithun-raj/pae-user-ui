import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
submenu: any= [{header: 'Apply for a visa', body: 'Find information and begin your application', buttonText: 'Start Now'},
{header: 'Book an appointment', body: 'Schedule your appointment with us', buttonText: 'Book Now'},
{header: 'Find a centre', body: 'Information about your local centre', buttonText: 'Find Now'},
{header: 'Premium services', body: 'Enjoy a faster, more convenient and more luxurious application', buttonText: 'View Services'}
];
}
