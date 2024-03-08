import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { SunglassesRoutingModule } from './sunglasses-routing.module';
import { CatalogComponent } from './catalog/catalog.component';



@NgModule({
  declarations: [
    CreateComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    SunglassesRoutingModule
  ]
})
export class SunglassesModule { }
