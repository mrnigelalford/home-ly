import {
	electronics_type,
	unit_type,
	pane,
	position,
	grass,
	repair_location,
	service_type,
	mod_room,
} from './home.enum';

// types

export type photo = {
	title: String;
	location: String; // pointer to bucket location,
	date: Date;
};

type project = {
	date: Date;
	cost_estimated: Number;
	const_actual: Number;
	receipt: receipt;
	place: String; // reference the id location of the project,
	photos: photo[];
};

type window = {
	type: pane;
	screen: Boolean;
	photos: photo[];
};

type closet = {
	doors: Number;
	shelving: String;
	photos: photo[];
};

export type unit = {
	type: unit_type;
	service_date: [Date];
	service_interval: Number;
	service_type: String;
	id: String; // auto generated,
	receipt: String; // Id of receipt stored in 'receipts'
};

export type receipt = {
	title: String;
	img: String; // location of image in bucket,
	description: String;
	id: String; // auto generated,
	date: Date;
	set_receipt: () => unit['receipt']; // setter to store the receipt and set the ID property
};

export type yard = {
	position: position;
	grass: grass;
	plants: String;
	project: project[];
	photos: photo[];
	plan: String // Document in bucket location
};

export type repair = {
	location: repair_location;
	description: String;
	date: Date;
	repair_interval: Number; // base days
	photos: photo[];
};

export type electronics = {
	name: String;
	type: electronics_type;
	website: String; //encrypted storage
	username: String; //encrypted storage
	password: String; //encrypted storage
	install_date: Date;
	repair_interval: Number; // base days
	photos: photo[];
};

export type service = {
	type: service_type;
	date: Date;
	photos: photo[];
	location?: String; // id of room
	repeat_interval: Number; // base days
	color_information?: String;
	receipt: receipt[];
};

export type room = {
	id: String; // auto generated
	modification?: {
		type: mod_room;
		date: Date;
		receipt?: receipt;
		notes?: String;
		photos?: photo[];
	};
	windows?: window[];
	closet?: closet[];
	photos: photo[];
};

export type stock = {
	name: String,
	type: String,
	quantity: Number
}