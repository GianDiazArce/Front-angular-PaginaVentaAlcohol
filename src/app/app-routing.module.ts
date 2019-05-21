import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'home' , component:HomeComponent},
  {path:'categoria/:id', component:CategoryDetailComponent},


  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }