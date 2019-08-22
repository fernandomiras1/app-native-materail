import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { EventData } from 'tns-core-modules/data/observable';

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onBlur($event: EventData) {
        console.log("on blur", $event.eventName);
    }

    returnPress($event: EventData) {
        console.log("returnPress", $event.eventName);
    }

    onTextChange($event: EventData) {
        console.log("onTextChange", $event.eventName);
    }

    onFocus($event: EventData) {
        console.log("onFocus", $event.eventName);
    }
}
