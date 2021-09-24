import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
} from '@angular/router';

interface OnComponentDeactivate {
  canDeactivate: () => boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MobileGuard
  implements
    CanActivate,
    CanLoad,
    CanActivateChild,
    CanDeactivate<OnComponentDeactivate>
{
  booleano = true;

  canActivate(): boolean {
    return this.booleano;
  }

  canLoad(): boolean {
    return this.booleano;
  }

  canActivateChild(): boolean {
    return false;
  }

  canDeactivate(component: OnComponentDeactivate): boolean {
    return component.canDeactivate();
  }
}
