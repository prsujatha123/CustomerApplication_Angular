import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable()
export class ProductDetailsGuard implements CanActivate {

  constructor(private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let id = +next.url[1].path
      if(isNaN(id) || id<1){
        alert('In valid product id')
       this.router.navigate(['/products']) 
      }


    return true;
  }
}
