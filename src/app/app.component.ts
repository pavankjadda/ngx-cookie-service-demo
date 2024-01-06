import { Component, inject, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-root', standalone: true, templateUrl: './app.component.html', imports: [ReactiveFormsModule],
})
export class AppComponent implements OnInit {
	cookieService = inject(CookieService);
	router = inject(Router);
	cookieInput = new FormControl('');

	ngOnInit(): void {
		this.cookieService.set('X-Auth-Token', uuidv4());
	}

	setCookie() {
		this.cookieService.set('X-Auth-Token', this.cookieInput.value ?? '');
	}
}
