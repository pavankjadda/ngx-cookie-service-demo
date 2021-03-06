import { Component, VERSION } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  cookieValue = '';
  constructor(public cookieService: CookieService) {
    this.cookieService.set('X-Auth-Token', uuidv4());
    this.cookieValue = this.cookieService.get('X-Auth-Token');
  }
}
