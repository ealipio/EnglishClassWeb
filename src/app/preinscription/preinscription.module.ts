import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PreInscriptionRoutingModule } from './preinscription-routing.module';
import {TeacherPreInscriptionComponent} from './teacher-pre-inscription/teacher-preinscription.component';
import {StudentPreInscriptionComponent} from './student-preinscription/student-preinscription.component';

@NgModule({
  declarations: [
    StudentPreInscriptionComponent,
    TeacherPreInscriptionComponent
  ],
  imports: [
    PreInscriptionRoutingModule,
    CommonModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [],
})
export class PreInscriptionModule { }
