import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular";
import { MapView, Marker, Position } from "nativescript-google-maps-sdk";

registerElement("MapView", () => MapView);

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    startPos = {
        latitude: 40.717337,
        longitude: -74.000469
    };
    latitude = 0;
    longitude = 0;
    zoom = 12;
    minZoom = 0;
    maxZoom = 21;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapLoaded: boolean = false;
    mapView: MapView;

    markers = [
        {
            latitude: 40.717337,
            longitude: -74.000469
        },
        {
            latitude: 40.680006,
            longitude: -73.942651
        },
        {
            latitude: 40.719871,
            longitude: -73.987518
        }
    ];

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    onMapReady(event) {
        if (!this.mapLoaded) {
            // if you dont set a timeout, the input pharmacies will be null during this point.
            setTimeout(() => {
                this.mapLoaded = true;
                this.loadMap(event);
            }, 500);
        }
    }

    loadMap(event) {
        this.mapView = event.object;

        this.markers.forEach(m => {
            const marker = new Marker();
            marker.position = Position.positionFromLatLng(
                m.latitude,
                m.longitude
            );
            this.mapView.addMarker(marker);
        });
    }
}
