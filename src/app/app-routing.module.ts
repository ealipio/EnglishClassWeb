import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScheduleDetailComponent } from './components/schedule-detail/schedule-detail.component';
import { StudentPreInscriptionComponent } from './components/student-preinscription/student-preinscription.component';
import { TeacherPreInscriptionComponent } from './components/teacher-preinscription/teacher-preinscription.component';
import { LocationComponent } from './components/location/location.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'schedule/:id', component: ScheduleDetailComponent },
  { path: 'pre-inscription/student', component: StudentPreInscriptionComponent },
  { path: 'pre-inscription/teacher', component: TeacherPreInscriptionComponent },
  { path: 'location', component: LocationComponent },
  { path: '**', redirectTo: 'login'}
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
