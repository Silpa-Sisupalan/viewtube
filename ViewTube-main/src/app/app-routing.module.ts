import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{LandingComponent}from './landing/landing.component';import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'landing' },
{ path: 'landing', component:LandingComponent,children:[{path:'register',component:RegisterComponent}]},
{path:'home',component:HomeComponent,
canActivate: [AuthGuardService]},
{path:'favorite',component:FavoriteComponent},
{path:'register',component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
