import { Component, OnInit } from '@angular/core';
import { DataService } from './services';
import { Restaurants, Restaurant } from './models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public restaurant: Restaurant = null;
    public restaurants: Restaurant[] = [];

    constructor(private dataService: DataService) { }

    public ngOnInit() {
        this.dataService.getData().subscribe((data: Restaurants) => {
            this.restaurants = data.restaurants;
        });
    }

    public showList(): void {
        this.restaurant = null;
    }

    public showMap(restaurant: Restaurant): void {
        this.restaurant = restaurant;
    }
}
