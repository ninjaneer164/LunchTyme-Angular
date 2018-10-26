import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurants } from '../models';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private dataUrl: string = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';

    constructor(private http: HttpClient) { }

    public getData() {
        return this.http.get<Restaurants>(this.dataUrl);
    }
}
