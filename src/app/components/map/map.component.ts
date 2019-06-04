import { Component, OnInit } from "@angular/core";
import { MapView, Marker, Position } from "nativescript-google-maps-sdk";
import { registerElement } from "nativescript-angular";
import { GlobalService } from "~/app/shared/global.service";

registerElement("MapView", () => MapView);
@Component({
    selector: "ns-map",
    templateUrl: "./map.component.html",
    styleUrls: ["./map.component.css"],
    moduleId: module.id
})
export class MapComponent implements OnInit {
    selectedMarker: Marker;
    showMap: boolean = false;
    startPos = {
        latitude: 40.478015,
        longitude: -73.4807045759
    };
    latitude = 0;
    longitude = 0;
    zoom = 9;
    minZoom = 0;
    maxZoom = 21;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapLoaded: boolean = false;
    mapView: MapView;

    constructor(private globalService: GlobalService) {
        this.globalService.getRefreshMarker().subscribe((marker: Marker) => {
            if (this.mapLoaded && marker) {
                this.updateMarker(marker);
            }
        });
    }

    ngOnInit() {}

    onMapReady(event) {
        if (!this.mapLoaded) {
            setTimeout(() => {
                this.mapLoaded = true;
                this.loadMap(event);
            }, 500);
        }
    }

    loadMap(event) {
        this.mapView = event.object;
        this.addMarkers();
    }

    addMarkers() {
        this.globalService.markerList.forEach(m => {
            const marker = new Marker();
            marker.position = Position.positionFromLatLng(
                m.latitude,
                m.longitude
            );
            marker.userData = { id: m.id, selected: false };

            this.mapView.addMarker(marker);
        });
    }

    updateMarker(marker: Marker) {
        this.mapView.findMarker((m: Marker) => {
            if (m.userData.id === marker.userData.id) {
                if (!m.userData.selected) {
                    m.color = "yellow";
                    m.userData.selected = true;
                } else {
                    m.color = "red";
                    m.userData.selected = false;
                }
            }

            return null;
        });
    }

    refreshMap() {
        this.mapView.clear();
        this.addMarkers();
    }

    onMapToggle() {
        this.showMap = !this.showMap;
        // reset mapLoaded when hiding map
        if (!this.showMap) this.mapLoaded = false;
    }

    onMarkerSelect(args) {
        const marker: Marker = args.marker;
        this.selectedMarker = marker;
    }

    onMarkerToggle() {
        this.globalService.updateMarker(this.selectedMarker);
    }
}
