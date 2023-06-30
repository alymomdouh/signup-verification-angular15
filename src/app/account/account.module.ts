import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccountRoutingModule } from "./account-routing.module";
import { ForgotPasswordComponent, LayoutComponent, LoginComponent, RegisterComponent, ResetPasswordComponent, VerifyEmailComponent } from "./Components";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        RouterModule,
    ],
    declarations: [
        //LayoutComponent,
        //LoginComponent,
        //RegisterComponent,
        VerifyEmailComponent,
        // ForgotPasswordComponent,
        //ResetPasswordComponent
    ]
})
export class AccountModule { }