import DS from 'ember-data';
import { computed } from '@ember/object';
import { capitalize } from '@ember/string';

export default DS.Model.extend({

  stationId: DS.attr('number'),

  name: DS.attr('string'),

  physicalConfiguration: DS.attr('string'),

  lat: DS.attr('number'),
  lon: DS.attr('number'),

  address: DS.attr('string'),
  
  capacity: DS.attr('string')
   
});
