import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/models';

@Component({
    selector: 'app-map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.scss']
})
export class MapComponent {

    @Input()
    public restaurant: Restaurant;
}
