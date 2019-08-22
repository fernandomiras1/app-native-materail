import { Component, OnInit } from "@angular/core";
import { Progress } from "nativescript-material-progress";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "ns-progress",
    templateUrl: "./progress.component.html",
    moduleId: module.id
})
export class ProgressComponent implements OnInit {
    public progressValue: number;

    ngOnInit() {
        this.progressValue = 25;

        setInterval(() => {
            this.progressValue += 1;
        }, 300);
    }

    onValueChanged(args) {
        let progressBar = <Progress>args.object;

        console.log("Value changed for", progressBar);
        console.log("New value:", progressBar.value);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
