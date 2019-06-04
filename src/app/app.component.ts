import { Component, OnInit } from "@angular/core";
import { isAndroid, isIOS } from "tns-core-modules/platform";
declare var GMSServices: any;

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        if (isIOS) {
            GMSServices.provideAPIKey("YOUR GOOGLE API KEY");
        }
    }

    getIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

        return iconPrefix + icon;
    }
}
