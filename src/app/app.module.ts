import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './layout/topmenu/topmenu.component';
import { HomeComponent } from './components//home/home.component';
import { ProgramacionComponent } from './components//programacion/programacion.component';
import { ProgramationDetailComponent } from './components/programationDetail/programationDetail.component';
import { ClassGroupsService } from './services/class-groups.service';
import { MessageBoxComponent } from './shared/components/message-box/message-box.component';
import { MessageBoxTypeDirective } from './shared/directives/message-box-type.directive';
import { AuthorizationService } from './shared/services/authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    HomeComponent,
    ProgramacionComponent,
    ProgramationDetailComponent,
    MessageBoxComponent,
    MessageBoxTypeDirective
],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [ClassGroupsService, AuthorizationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
