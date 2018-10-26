import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from 'src/app/models';

@Component({
    selector: 'app-restaurant',
    templateUrl: 'restaurant.component.html',
    styleUrls: ['restaurant.component.scss']
})
export class RestaurantComponent {

    @Input()
    public restaurant: Restaurant;

    @Output()
    public itemSelect: EventEmitter<Restaurant> = new EventEmitter<Restaurant>();

    public showInfo(): void {
        this.itemSelect.emit(this.restaurant);
    }
}
