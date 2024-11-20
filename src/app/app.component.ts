import { Component, inject, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [ReactiveFormsModule]
})
export class AppComponent implements OnInit {
	cookieService = inject(CookieService);
	cookieInput = new FormControl('');

	ngOnInit(): void {
		this.cookieService.set('token', '');
	}

	setCookie() {
		this.cookieService.set('token', this.cookieInput.value ?? '');
	}
}
