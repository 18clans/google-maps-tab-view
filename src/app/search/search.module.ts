import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { MapModule } from "../components/map/map.module";
@NgModule({
    imports: [NativeScriptCommonModule, SearchRoutingModule, MapModule],
    declarations: [SearchComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SearchModule {}
