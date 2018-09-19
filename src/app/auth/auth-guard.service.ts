import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {CanActivate, Router} from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.user) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
