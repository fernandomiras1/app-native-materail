import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SearchRoutingModule } from "./text-field-routing.module";
import { TextFieldComponent } from "./text-field.component";

import { NativeScriptMaterialTextFieldModule } from "nativescript-material-textfield/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule,
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
