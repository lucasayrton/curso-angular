import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileGuard } from './core/guards/mobile.guard';

const routes: Routes = [
  {
    path: 'compras',
    loadChildren: () =>
      import('./modules/compras/compras.module').then(
        (m) => m.ComprasRoutingModule
      ),
  },
  {
    path: 'pipes-diretivas',
    loadChildren: () =>
      import('./modules/pipes-diretivas/pipes-diretivas.module').then(
        (m) => m.PipesDiretivasRoutingModule
      ),
    canActivate: [MobileGuard],
    // canLoad: [MobileGuard],
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./modules/forms/forms.module').then((m) => m.FormsRoutingModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./modules/services/services.module').then(
        (m) => m.ServicesRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
