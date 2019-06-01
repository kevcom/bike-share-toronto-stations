import Service from '@ember/service';

export default Service.extend({

	_googleMaps: window.google.maps,

	_mapInstance: null,

	createNewMap(element, options) {
		// create new instance
		const mapInstance = new this._googleMaps.Map(element, options);
		// set it to internal variable
		this._mapInstance = mapInstance;
	},

	addMarker(position, icon) {
		const options = {
			position: position,
			icon: {
				url: icon.url,
				scaledSize: new this._googleMaps.Size(...icon.scaledSize),
	            origin: new this._googleMaps.Point(...icon.origin),
	            anchor: new this._googleMaps.Point(...icon.anchor)
			},
			map: this._mapInstance
		}
		new this._googleMaps.Marker(options);
	},

	addBoundaryPolygon(coordinates, options) {
        const boundaryPolygon = new this._googleMaps.Polygon({
          paths: coordinates,
          strokeColor: options.strokeColor || '#5A5A64',
          strokeOpacity: options.strokeOpacity || 0.8,
          strokeWeight: options.strokeWeight || 2,
          fillColor: options.fillColor || '#5A5A64',
          fillOpacity: options.fillOpacity || 0.35
        });
        boundaryPolygon.setMap(this._mapInstance);
	}

});
