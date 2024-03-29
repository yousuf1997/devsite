import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorksamplesComponent } from './worksamples/worksamples.component';
import { OthersComponent } from './others/others.component';
import { MoviesComponent } from './movies/movies.component';
import { MenuComponent } from './menu/menu.component';
import { AuthService } from './auth.service';
import { DevInterviewGuideComponent } from './dev-interview-guide/dev-interview-guide.component';


const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'worksamples', component: WorksamplesComponent },
  { path: 'articles', component: OthersComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'dev-prep', component: DevInterviewGuideComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
