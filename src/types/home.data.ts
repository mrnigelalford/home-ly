import {service, repair, yard, receipt, electronics, unit, room } from './home.types'

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
  service?: service
};
