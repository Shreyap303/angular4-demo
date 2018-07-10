import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidLogin: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AuthService) { }

  signIn(credentials) {
    if ( credentials.email === 'shreya' && credentials.password === 'shreya') {
      localStorage.setItem('user', JSON.stringify(credentials));
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      if (returnUrl != null && (returnUrl === '/posts' || returnUrl.startsWith('/followers'))) {
        returnUrl = '/';
      }
      this.router.navigate([returnUrl || '/']);
    } else if ( credentials.email === 'admin' && credentials.password === 'admin') {
      localStorage.setItem('user', JSON.stringify(credentials));
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/']);
    } else {
      this.invalidLogin = true;
    }
  }
}
