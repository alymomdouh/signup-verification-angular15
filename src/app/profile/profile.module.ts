import { ReactiveFormsModule } from "@angular/forms";
import { DetailsComponent } from "./components/details/details.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UpdateComponent } from "./components/update/update.component";
import { LayoutComponent } from "./components/layout/layout.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProfileRoutingModule
    ],
    declarations: [
        LayoutComponent,
        DetailsComponent,
        UpdateComponent
    ]
})
export class ProfileModule { }