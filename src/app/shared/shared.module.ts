import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: true,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  exports: [MaterialModule, ComponentsModule, NgxMaskModule],
})
export class SharedModule {}
