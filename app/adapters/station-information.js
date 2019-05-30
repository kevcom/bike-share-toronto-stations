import DS from 'ember-data';

import pbscAPI from '../mixins/pbsc-api';

export default DS.Adapter.extend(pbscAPI, {

	endpoint: 'station_information'

});
