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

        console.log(station);

        const center = {lat: station.lat, lng: station.lon};
        const options = {
            zoom: 15,
            center: center,
            disableDefaultUI: true
        }

        const mapSelector = `#${this.elementId} > .station-map`;
        const element = document.querySelector(mapSelector);

        // create new Google Map using mapService
        this.mapService.createNewMap(element, options);

        // add marker at center of map (using coords of station)
        this.mapService.addMarker(center);

        // draw boundaries on map (sometimes two, for elementary and secondary)
        //this.drawBoundariesOnMap();
    },

    drawBoundariesOnMap() {
        const school = this.station;

        // iterate through secondary or elementary or both level boundaries
        for (let level in school.boundaries) {
            // each level might have one or more boundaries
            school.boundaries[level].forEach(pathArray => {
                // convert pathArray into object with lat/lng keys
                // which is the format the G Maps uses
                let coordinates = pathArray.map(point => {
                    return {lat: point[0], lng: point[1]}
                });

                // if level is elementary, set blue fill and stroke
                // colours, otherwise default is red for secondary
                let options = {};
                if (level === 'elementary') {
                    let fillColor = '#0000FF', strikeColor = '#0000FF';
                    options = {fillColor, strikeColor};
                }
                this.mapService.addBoundaryPolygon(coordinates, options);
            })

        }
    }

});
