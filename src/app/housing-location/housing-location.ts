import {Component, Input} from '@angular/core';
import { HousingLocation as IHousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.less'
})
export class HousingLocation {
  @Input() housingLocation!: IHousingLocation;
}
