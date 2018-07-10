import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth-service';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor( private service: AuthService,
               private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    if (this.service.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url}});
    }
  }

}
