import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorksamplesComponent } from './worksamples/worksamples.component';


const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'worksamples', component: WorksamplesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
