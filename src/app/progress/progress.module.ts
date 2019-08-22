import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptMaterialProgressModule } from "nativescript-material-progress/angular";
import { ProgressComponent } from "./progress.component";
import { ProgressRoutingModule } from "./progress-routing.module";

@NgModule({
    declarations: [ProgressComponent],
    imports: [
        NativeScriptCommonModule,
        ProgressRoutingModule,
        NativeScriptMaterialProgressModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProgressModule {}
