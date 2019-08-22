import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    {
        path: "activity-indicator",
        loadChildren: "~/app/activity-indicator/activity-indicator.module#ActivityIndicatorModule"
    },
    {
        path: "progress",
        loadChildren: "~/app/progress/progress.module#ProgressModule"
    },
    {
        path: "ripple",
        loadChildren: "~/app/ripple/ripple.module#RippleModule"
    },
    {
        path: "slider",
        loadChildren: "~/app/slider/slider.module#SliderModule"
    },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
