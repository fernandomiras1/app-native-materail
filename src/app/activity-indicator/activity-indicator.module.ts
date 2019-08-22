import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptMaterialActivityIndicatorModule } from "nativescript-material-activityindicator/angular";
import { ActivityIndicatorComponent } from "./activity-indicator.component";
import { ActivityRoutingModule } from "./activity-indicator-routing.module";

@NgModule({
    declarations: [ActivityIndicatorComponent],
    imports: [
        NativeScriptCommonModule,
        ActivityRoutingModule,
        NativeScriptMaterialActivityIndicatorModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ActivityIndicatorModule {}
