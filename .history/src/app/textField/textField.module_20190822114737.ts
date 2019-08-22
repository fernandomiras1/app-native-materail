import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TextFieldRoutingModule } from "./text-field-routing.module";
import { TextFieldComponent } from "./text-field.component";

import { NativeScriptMaterialTextFieldModule } from "nativescript-material-textfield/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TextFieldRoutingModule,
        NativeScriptMaterialTextFieldModule
    ],
    declarations: [
        TextFieldComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TextFieldModule { }
