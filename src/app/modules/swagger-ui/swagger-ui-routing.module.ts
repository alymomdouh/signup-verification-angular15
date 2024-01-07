import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwaggerIndexComponent } from './components/swagger-index/swagger-index.component';

const routes: Routes = [
  { path: '', component: SwaggerIndexComponent },
  { path: 'index', component: SwaggerIndexComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwaggerUiRoutingModule { }
