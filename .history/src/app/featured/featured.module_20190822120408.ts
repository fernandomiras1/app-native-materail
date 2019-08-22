import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FeaturedRoutingModule } from "./featured-routing.module";
import { FeaturedComponent } from "./featured.component";

import { NativeScriptMaterialTextFieldModule } from "nativescript-material-textfield/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FeaturedRoutingModule,
        NativeScriptMaterialTextFieldModule
    ],
    declarations: [
        FeaturedComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FeaturedModule { }
