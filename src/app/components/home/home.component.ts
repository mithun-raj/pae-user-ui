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
  navBarItems: any = [{ header: 'Apply for a visa', body: 'Find information and begin your application', buttonText: 'Start Now' },
  { header: 'Book an appointment', body: 'Schedule your appointment with us', buttonText: 'Book Now' },
  { header: 'Find a centre', body: 'Information about your local centre', buttonText: 'Find Now' },
  { header: 'Premium services', body: 'Enjoy a faster, more convenient and more luxurious application', buttonText: 'View Services' }
  ];

  pageData = {
    "language": "ENG/HIN",
    "pageName": "home",
    "component": "menu",
    "content" : {
      "pageHeader": "Welcome to VFS Global",
      "pageDesc": "We are the official partner of the Embassy of Belgium in India",
      "content": {
        "boxLinksYN": true,
        "boxLinksCount": 4,
        "boxLinks": [
          { "boxHeader": "Apply for a visa", "boxDesc": "Find information and begin your application", "boxLinkText": "Start Now", "boxLink": ":;javascript;", "content": null },
          { "boxHeader": "Book an appointment", "boxDesc": "Schedule your appointment with us", "boxLinkText": "Book Now", "boxLink": ":;javascript;", "content": null },
          { "boxHeader": "Find a centre", "boxDesc": "Information about your local centre", "boxLinkText": "Find Now", "boxLink": ":;javascript;", "content": null },
          { "boxHeader": "Premium services", "boxDesc": "Enjoy a faster, more convenient and more luxurious application", "boxLinkText": "View Services", "boxLink": ":;javascript;", "content": null },
        ]
      }
    }
  };

}
