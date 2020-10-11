import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null,
    confirm_password: null,
    terms_conditions: null
  }

  public error = [];
  constructor(private account: AccountService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.account.register(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
    this.error = null;
    console.log(data);
  }

  handleError(error) {
    this.error = error.error.error;
  }

}
