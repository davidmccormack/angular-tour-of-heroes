import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeroDetailsComponent} from "./hero-details/hero-details.component";

const routes : Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'details/:id', component: HeroDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
