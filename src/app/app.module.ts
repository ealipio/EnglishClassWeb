import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './layout/topmenu/topmenu.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components//home/home.component';
import { ProgramacionComponent } from './components//programacion/programacion.component';
import { ProgramationDetailComponent } from './components/programationDetail/programationDetail.component';
import { StudentPreInscriptionComponent } from './components/studentPreInscription/studentPreInscription.component';
import { TeacherPreInscriptionComponent } from './components/teacherPreInscription/teacherPreInscription.component';
import { ClassGroupsService } from './services/class-groups.service';
import { MessageBoxComponent } from './shared/components/message-box/message-box.component';
import { MessageBoxTypeDirective } from './shared/directives/message-box-type.directive';
import { AuthorizationService } from './shared/services/authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    LoginComponent,
    HomeComponent,
    ProgramacionComponent,
    ProgramationDetailComponent,
    StudentPreInscriptionComponent,
    TeacherPreInscriptionComponent,
    MessageBoxComponent,
    MessageBoxTypeDirective
],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ClassGroupsService, AuthorizationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
