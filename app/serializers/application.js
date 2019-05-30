import { underscore } from '@ember/string';
import DS from 'ember-data';

export default DS.JSONSerializer.extend({
	
	primaryKey: 'station_id',

	keyForAttribute(attr) {
		return underscore(attr);
	}
});
