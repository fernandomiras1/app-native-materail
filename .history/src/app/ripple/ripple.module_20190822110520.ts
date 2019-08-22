import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptMaterialRippleModule } from "nativescript-material-ripple/angular";
import { RippleComponent } from "./ripple.component";
import { RippleRoutingModule } from "./ripple-routing.module";

@NgModule({
    declarations: [RippleComponent],
    imports: [
        NativeScriptCommonModule,
        RippleRoutingModule,
        NativeScriptMaterialRippleModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class RippleModule {}
