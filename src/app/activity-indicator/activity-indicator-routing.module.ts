import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ActivityIndicatorComponent } from "./activity-indicator.component";

const routes: Routes = [
    { path: "", component: ActivityIndicatorComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ActivityRoutingModule { }
