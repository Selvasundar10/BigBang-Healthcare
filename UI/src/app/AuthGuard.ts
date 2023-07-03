// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { AuthService } from './auth.service';



// @Injectable({
//   providedIn: 'root'
// })

// export class authGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean | UrlTree {

//     if (this.authService.isAuthenticated()) {
//       // User is authenticated, allow access to the route
//       return true;
//     } else {
//       // User is not authenticated, redirect to login page
//       return this.router.parseUrl('/login');
//     }
//   }
// }
