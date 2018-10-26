import { Contact } from './Contact';
import { Location } from './Location';

export interface Restaurant {
    backgroundImageURL: string;
    category: string;
    contact: Contact;
    location: Location;
    name: string;
}

export interface Restaurants {
    restaurants: Restaurant[];
}
