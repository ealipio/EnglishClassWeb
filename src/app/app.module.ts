import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopmenuComponent } from './layout/topmenu/topmenu.component';
import { HomeComponent } from './components//home/home.component';
import { ProgramacionComponent } from './components//programacion/programacion.component';
import { ClassGroupsService } from './services/class-groups.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'programacion', component: ProgramacionComponent },
  { path: '**', redirectTo: 'home'}
];
@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    HomeComponent,
    ProgramacionComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    HttpModule
  ],
  providers: [ClassGroupsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
