import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCifradoComponent } from './component-cifrado/component-cifrado.component';

const routes: Routes = [
  { path: 'cifrado', component: ComponentCifradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
