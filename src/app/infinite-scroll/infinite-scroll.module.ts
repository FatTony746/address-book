import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GlobalSearchModule } from '../global-search/global-search.module';
import { InfiniteScrollContainerDirective } from './infinite-scroll-container.directive';

@NgModule({
  declarations: [
    InfiniteScrollContainerDirective
  ],
  imports: [
    CommonModule,
    GlobalSearchModule
  ],
  exports: [
    InfiniteScrollContainerDirective
  ]
})
export class InfiniteScrollModule { }
