import Component from '@ember/component';

import { inject as service } from '@ember/service';

export default Component.extend({

    tagName: 'station-card',

    mapService: service('google-map'),

    didRender() {
        this._super(...arguments);

        this.initMap();
    },

    initMap() {
        const station = this.station;

        const center = {lat: station.lat, lng: station.lon};
        const options = {
            zoom: 15,
            center: center,
            disableDefaultUI: true
        }

        const bikeIcon = {
            url: 'images/bike.png',
            scaledSize: [36,36],
            origin: [0,0],
            anchor: [0,32]
        };

        const mapSelector = `#${this.elementId} > .station-map`;
        const element = document.querySelector(mapSelector);

        // create new Google Map using mapService
        this.mapService.createNewMap(element, options);

        // add marker at center of map (using coords of station)
        this.mapService.addMarker(center, bikeIcon);
    }

});
