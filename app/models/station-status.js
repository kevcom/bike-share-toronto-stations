import DS from 'ember-data';
import { computed } from '@ember/object';
import { capitalize } from '@ember/string';

export default DS.Model.extend({

	stationId: DS.attr('number'),

	numBikesAvailable: DS.attr('number'),
	numBikesDisabled: DS.attr('number'),

	numDocksAvailable: DS.attr('number'),
	numDocksDisabled: DS.attr('number'),
	
	status: DS.attr('string')
		
});
