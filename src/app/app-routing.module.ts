import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { AuthGuardService } from './common/services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'schedule', loadChildren: 'app/schedule/schedule.module#ScheduleModule' },
  { path: 'pre-inscription', loadChildren: 'app/preinscription/preinscription.module#PreInscriptionModule' },
  { path: 'teacher-schedule', loadChildren: 'app/teacher-schedule/teacher-schedule.module#TeacherScheduleModule' },
  { path: 'location', component: LocationComponent, canActivate: [AuthGuardService] },
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
