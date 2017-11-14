import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentPreInscriptionComponent } from './student-preinscription/student-preinscription.component';
import { TeacherPreInscriptionComponent } from './teacher-preinscription/teacher-preinscription.component';

const preInscriptionRoutes: Routes = [
  { path: 'student', component: StudentPreInscriptionComponent },
  { path: 'teacher', component: TeacherPreInscriptionComponent }
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
