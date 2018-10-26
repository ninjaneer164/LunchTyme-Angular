import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './services';
import { HeaderComponent, MapComponent, RestaurantComponent } from './components';

@NgModule({
    declarations: [AppComponent, HeaderComponent, MapComponent, RestaurantComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
