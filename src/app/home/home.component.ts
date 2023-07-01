import { Component } from '@angular/core';
import { AccountService, ModalService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    account = this.accountService.accountValue;

    constructor(
        private accountService: AccountService,
        protected modalService: ModalService
        /**  constructor protected, 
         * the protected modifier makes the service accessible in the component template as well as the component */
        ) { }
}