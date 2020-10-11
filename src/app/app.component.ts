import { Component } from '@angular/core';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Automated Self Service Student Portal';
  constructor(private snotifyService: SnotifyService) {}

  
}
