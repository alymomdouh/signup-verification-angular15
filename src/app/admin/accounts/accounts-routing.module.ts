import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEditComponent } from "./Components/add-edit/add-edit.component";
import { ListComponent } from "./Components/list/list.component";

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'add', component: AddEditComponent },
    { path: 'edit/:id', component: AddEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountsRoutingModule { }