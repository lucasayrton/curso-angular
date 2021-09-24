import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileGuard } from 'src/app/core/guards/mobile.guard';
import { PipesDiretivasComponent } from './pipes-diretivas.component';

const routes: Routes = [
  {
    path: '',
    component: PipesDiretivasComponent,
    canDeactivate: [MobileGuard],
  },
  {
    path: 'children-route',
    canActivateChild: [MobileGuard],
    children: [
      {
        path: '',
        component: PipesDiretivasComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesDiretivasRoutingModule {}
