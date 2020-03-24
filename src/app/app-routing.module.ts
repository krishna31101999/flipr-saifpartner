import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ReachusComponent } from './reachus/reachus.component';


const routes: Routes = [

    {path:'portfolio',component: PortfolioComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
