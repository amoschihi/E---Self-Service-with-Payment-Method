import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

  public form = {
    name: null
  };
  public error = [];
  public message = '';

  constructor(private admin: AdminService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.admin.addRole(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
    this.error = null;
    this.message = 'Role created successfully';
    this.form.name = data.name;
  }

  handleError(error) {
     this.error = error.error.errors;
     console.log(this.error);
  }

}
