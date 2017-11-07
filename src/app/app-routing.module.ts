import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components//home/home.component';
import { ProgramacionComponent } from './components//programacion/programacion.component';
import { ProgramationDetailComponent } from './components/programationDetail/programationDetail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'schedule', component: ProgramacionComponent },
  { path: 'schedule/:id', component: ProgramationDetailComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {}
