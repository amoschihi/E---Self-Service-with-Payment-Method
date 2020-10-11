import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public error = '';
  public form = {
    email: null,
    password: null,
    remember: null
  }
  constructor(
    private account: AccountService,
    private token: TokenService,
    private route: Router,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.account.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
    this.token.handle(data.token);
    this.auth.changeAuthStatus(true);
    this.route.navigateByUrl('/dashboard');
  }

  handleError(error) {
    this.error = error.error.error;
  }
}
