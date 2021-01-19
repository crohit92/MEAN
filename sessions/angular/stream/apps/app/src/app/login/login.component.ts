import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../../shared/models/credentials';
import { StorageService } from '../core/services/storage/storage.service';
import { LoginService } from './login.service';

@Component({
  selector: 'stream-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  passwordVisible = false;
  credentials: Credentials;
  constructor(private readonly loginService: LoginService,
    private storage: StorageService,
    private router: Router) {
    this.credentials = new Credentials();

  }

  login() {
    this.loginService.login(this.credentials).subscribe((user) => {
      // todo;
      this.storage.set('user', user);
      this.router.navigate(['/dashboard']);
    })
  }

  isValid() {
    return !!this.credentials.username && !!this.credentials.password;
  }
}