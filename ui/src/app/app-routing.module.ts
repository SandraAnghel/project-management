import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'board', component: BoardComponent},
  {path: 'team', component: TeamComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
