import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-password-request',
  templateUrl: './password-request.component.html',
  styleUrls: ['./password-request.component.css']
})
export class PasswordRequestComponent implements OnInit {
  public form = {
    email: null
  }
  public error = null;
  constructor(
    private account: AccountService,
    private notify: SnotifyService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.account.requestPasswordReset(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    console.log(data);
    this.form.email = null;
  }

  handleError(error) {
    this.error = error.error.error;
    this.notify.error(error.error.error);
  }

}
