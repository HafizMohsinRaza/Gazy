// import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { inject } from '@angular/core';

// export const authGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService);
//   const router = inject(Router);

//   if (!authService.islogged()) {
//     router.navigate(['/admin/account/login']);
//     return false;
//   }

//   // Redirect to the login page
//   return authService.islogged();
// };
// auth-guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    const isAuth =  this.authService.getIsAuth()
    if (!isAuth) {
      this.router.navigate(['admin/account/login']);
    } 
    return isAuth;
  }
}
