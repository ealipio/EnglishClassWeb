import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentPreInscriptionComponent } from './student-preinscription/student-preinscription.component';
import { TeacherPreInscriptionComponent } from './teacher-preinscription/teacher-preinscription.component';
import { AuthGuardService } from '../common/services/auth-guard.service';

const preInscriptionRoutes: Routes = [
  { path: 'student', component: StudentPreInscriptionComponent, canActivate: [AuthGuardService] },
  { path: 'teacher', component: TeacherPreInscriptionComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forChild(preInscriptionRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class PreInscriptionRoutingModule {}
