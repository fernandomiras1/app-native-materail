import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BrowseRoutingModule } from "./card-view-routing.module";
import { CardViewComponent } from "./card-view.component";

import { NativeScriptMaterialCardViewModule } from "nativescript-material-cardview/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BrowseRoutingModule,
        NativeScriptMaterialCardViewModule
    ],
    declarations: [
        CardViewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CardViewModule { }
