import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AdminRoutingModule } from "./admin-routing.module";
import { VsubnavComponent } from './components/vsubnav/vsubnav.component';
import { OverviewComponent } from "./components/overview/overview.component";
import { LayoutComponent } from "./components/layout/layout.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ],
    declarations: [
        LayoutComponent,
        OverviewComponent,
        VsubnavComponent
    ]
})
export class AdminModule { }