import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "ns-slider",
    templateUrl: "./slider.component.html",
    moduleId: module.id
})
export class SliderComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
