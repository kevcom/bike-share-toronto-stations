import Mixin from '@ember/object/mixin';

export default Mixin.create({

	baseURL: 'https://tor.publicbikesystem.net/ube/gbfs/v1/en/',

	async _fetchData() {
		const response = await fetch(`${this.baseURL}/${this.endpoint}`);

		return response.json();
	},

	async _getStationsList() {
		const response = await this._fetchData();
		const stationsList = response.data.stations;

		return stationsList;
	},
	
	async query(store, type, query) {
		const stations = await this._getStationsList();

		const sliced = stations.slice(query.start || 0, query.limit);
		return sliced;
	},

	async findRecord(store, type, id) {
		const stations = await this._getStationsList();

		const station = stations.filter(station => {
			return station.station_id == id;
		})[0];
		return station;
	}
});
