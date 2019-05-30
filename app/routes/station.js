import Route from '@ember/routing/route';

export default Route.extend({
	model({ stationId }) {
		return this.store.findRecord('station-information', stationId);
	}
});
