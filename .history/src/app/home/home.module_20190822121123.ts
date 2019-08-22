import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NativeScriptMaterialButtonModule } from "nativescript-material-button/angular";

import { NativeScriptMaterialActivityIndicatorModule } from "nativescript-material-activityindicator/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptMaterialButtonModule,
        NativeScriptMaterialActivityIndicatorModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
