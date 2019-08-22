import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptMaterialSliderModule } from "nativescript-material-slider/angular";
import { SliderComponent } from "./slider.component";
import { SliderRoutingModule } from "./slider-routing.module";

@NgModule({
    declarations: [SliderComponent],
    imports: [NativeScriptCommonModule,
        SliderRoutingModule,
        NativeScriptMaterialSliderModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SliderModule {}
