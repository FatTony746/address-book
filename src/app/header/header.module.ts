import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GlobalSearchModule } from '../global-search/global-search.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    GlobalSearchModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
