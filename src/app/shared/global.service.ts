import { Injectable } from "@angular/core";
import { Marker } from "nativescript-google-maps-sdk";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class GlobalService {
    public markerList = [];
    private marker: BehaviorSubject<Marker>;
    constructor() {
        // Build Marker List
        for (let i = 0; i < 100; i++) {
            this.markerList.push({
                id: this.getRandomInRange(1, 5000, 0),
                latitude: this.getRandomInRange(40, 41, 6),
                longitude: this.getRandomInRange(-73, -74, 10)
            });
        }

        // used for refreshing one marker
        this.marker = new BehaviorSubject<Marker>(null);
    }

    getRefreshMarker(): Observable<Marker> {
        return this.marker.asObservable();
    }

    updateMarker(marker: Marker) {
        this.marker.next(marker);
    }

    private getRandomInRange(from, to, fixed) {
        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    }
}
