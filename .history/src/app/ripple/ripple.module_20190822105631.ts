import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptMaterialRippleModule } from "nativescript-material-ripple/angular";
import { RippleComponent } from "./ripple.component";
import { RippleRoutingModule } from "./ripple-routing.module";

@NgModule({
    declarations: [RippleComponent],
    imports: [
        NativeScriptCommonModule,
        RippleRoutingModule,
        NativeScriptMaterialRippleModule]
})
export class RippleModule {}
