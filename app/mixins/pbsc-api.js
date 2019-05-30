import Mixin from '@ember/object/mixin';

export default Mixin.create({

	baseURL: 'https://tor.publicbikesystem.net/ube/gbfs/v1/en/',

	async _fetchData() {
		const response = await fetch(`${this.baseURL}/${this.endpoint}`);

		return response.json();
	},
	
	async query(store, type, query) {
		const response = await this._fetchData();

		const stations = response.data.stations;

		const sliced = stations.slice(query.start || 0, query.limit);
		return sliced;
	},

	async findRecord(store, type, id) {
		const response = await this._fetchData();

		const stations = response.data.stations;

		const station = stations.filter(station => {
			return station.station_id == id;
		})[0];
		return station;
	}
});
