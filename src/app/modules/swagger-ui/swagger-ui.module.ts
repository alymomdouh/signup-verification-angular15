import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwaggerUiRoutingModule } from './swagger-ui-routing.module';
import { SwaggerIndexComponent } from './components/swagger-index/swagger-index.component';


@NgModule({
  declarations: [
    SwaggerIndexComponent
  ],
  imports: [
    CommonModule,
    SwaggerUiRoutingModule
  ]
})
export class SwaggerUiModule { }
