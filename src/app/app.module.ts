import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthMessageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AuthMessageComponent]
})
export class AppModule { }
