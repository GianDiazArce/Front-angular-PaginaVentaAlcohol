import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'home' , component:HomeComponent},
  {path: 'categoria/:id', component:CategoryDetailComponent},
  {path: 'registro', component:RegisterComponent},
  {path: 'login', component:LoginComponent},


  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }