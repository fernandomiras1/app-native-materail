import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TextFieldRoutingModule } from "./textField-routing.module";
import { TextFieldComponent } from "./textField.component";

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
