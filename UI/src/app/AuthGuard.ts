import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';

     
@Injectable({
      providedIn: 'root'
    })
    export class AuthGuard implements CanActivate {
    
      constructor(private authService: AuthService, private router: Router) { }
    
      private isAllowed(): boolean {
        if(localStorage.getItem('token'))
          return true;
        else return false;
      }
      canActivate(): boolean {
        if (this.isAllowed()) {
          return true;
        } else {
    
         if(confirm('Authenticated users only allowed!!!'))
         {
          this.router.navigate(['/login']);
         }
         return false;
    
        }
      }
    
    }
