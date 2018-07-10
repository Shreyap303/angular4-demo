import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth-service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor( private service: AuthService,
               private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    if (this.service.isLogin()) {
      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url}});
    }
  }

}
