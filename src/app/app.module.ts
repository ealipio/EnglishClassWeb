import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './layout/topmenu/topmenu.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components//home/home.component';
import { ScheduleComponent } from './components//schedule/schedule.component';
import { ScheduleDetailComponent } from './components/schedule-detail/schedule-detail.component';
import { StudentPreInscriptionComponent } from './components/student-preinscription/student-preinscription.component';
import { TeacherPreInscriptionComponent } from './components/teacher-preinscription/teacher-preinscription.component';
import { LocationComponent } from './components/location/location.component';

import { ScheduleService } from './services/schedule.service';
import { MessageBoxComponent } from './shared/components/message-box/message-box.component';
import { MessageBoxTypeDirective } from './shared/directives/message-box-type.directive';
import { AuthorizationService } from './shared/services/authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    LoginComponent,
    HomeComponent,
    ScheduleComponent,
    ScheduleDetailComponent,
    StudentPreInscriptionComponent,
    TeacherPreInscriptionComponent,
    LocationComponent,
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
  providers: [ScheduleService, AuthorizationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
