import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './layout/topmenu/topmenu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './components/location/location.component';
import { MessageBoxComponent } from './common/components/message-box/message-box.component';
import { MessageBoxTypeDirective } from './common/directives/message-box-type.directive';
import { AuthorizationService } from './common/services/authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    LoginComponent,
    HomeComponent,
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
  providers: [AuthorizationService],
  bootstrap: [AppComponent],
})
export class AppModule { }


