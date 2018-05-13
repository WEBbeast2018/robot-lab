import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RobotListComponent } from './components/robot-list/robot-list.component';
import { PartListComponent } from './components/part-list/part-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/robots', pathMatch: 'full'},
  {path: 'robots', component: RobotListComponent},
  {path: 'parts', component: PartListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
