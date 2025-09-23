import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CursorLightDirective } from './cursor-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CursorLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,           // Template-driven forms
    ReactiveFormsModule ,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
