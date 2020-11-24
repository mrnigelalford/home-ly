import {
	service,
	repair,
	yard,
	receipt,
	electronics,
	unit,
	room,
	photo,
	stock
} from './home.types';

import { state, country, industry } from './home.enum';

// root house model

export type house = {
	receipt: receipt[];
	rooms: room[];
	exterior?: {
		outdoor: yard[];
		repair: repair[];
	};
	electronics?: electronics[];
	unit?: unit[];
	service?: service;
	id: String; // auto generated,
	admin: user['id'];
	photos: photo[];
	address: String;
	state: state;
	city: string;
	county: string;
	country: country;
	floorplan: String; // pointer to bucket storage of floorplan image
	stock : stock[]
};

export type serviceProvider = {
	name: String;
	url: String;
	industry: industry;
	rating: number; // (1-4)
};

export type user = {
	username: String;
	first_name: String;
	last_name: String;
	google_stuff: Object;
	house: house[];
	id: String;
	serviceProvider?: serviceProvider[];
};
