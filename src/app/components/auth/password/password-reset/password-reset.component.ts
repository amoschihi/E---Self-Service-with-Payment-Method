import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  public form = {
    email :null,
    password: null,
    confirm_password: null,
    token: null
  }
  public error = [];
  constructor(
    private route: ActivatedRoute,
    private account: AccountService
  ) { 
    this.route.queryParams.subscribe(params => {
      this.form.token = params.token;
      // this.form.email = params.email;
      
    })
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.account.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
    this.error = null;
    console.log(data);

  }

  handleError(error) {
    // console.log(error);
    this.error = error.error.error;
    ;
  }

}
