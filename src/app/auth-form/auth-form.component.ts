import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements AfterContentInit {
showMessage = false;
@ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }
  userForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
    rememberme: new FormControl(false)
  });
  ngAfterContentInit() {
    const authMessageFactory = this.resolver.resolveComponentFactory(AuthMessageComponent);
    this.userForm.valueChanges.subscribe(value => {
      if (value.rememberme) {
        this.entry.createComponent(authMessageFactory);
      } else {
        this.entry.clear();
      }
    });
  }
}
