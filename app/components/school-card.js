import Component from '@ember/component';

import { inject as service } from '@ember/service';

export default Component.extend({

    tagName: 'school-card',

    mapService: service('google-map'),

    didRender() {
        this._super(...arguments);

        this.initMap();
    },

    initMap() {
        const school = this.school;

        const center = {lat: school.latitude, lng: school.longitude};
        const options = {
            zoom: 11,
            center: center,
            disableDefaultUI: true
        }

        const mapSelector = `#${this.elementId} > .school-map`;
        const element = document.querySelector(mapSelector);

        // create new Google Map using mapService
        this.mapService.createNewMap(element, options);

        // add marker at center of map (using coords of school)
        this.mapService.addMarker(center);

        // draw boundaries on map (sometimes two, for elementary and secondary)
        this.drawBoundariesOnMap();
    },

    drawBoundariesOnMap() {
        const school = this.school;

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
