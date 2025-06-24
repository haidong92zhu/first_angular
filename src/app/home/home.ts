import { Component } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingLocation as HousingLocationComponent } from '../housing-location/housing-location';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.html',
  styleUrl: './home.less'
})
export class Home {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
