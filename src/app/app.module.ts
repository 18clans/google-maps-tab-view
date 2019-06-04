import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapModule } from "./components/map/map.module";
import { GlobalService } from "./shared/global.service";
@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule, MapModule],
    declarations: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [GlobalService]
})
export class AppModule {}
