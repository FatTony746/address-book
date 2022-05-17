import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollContainerDirective } from './infinite-scroll-container.directive';

@NgModule({
  declarations: [InfiniteScrollContainerDirective],
  imports: [CommonModule],
  exports: [InfiniteScrollContainerDirective],
})
export class InfiniteScrollModule {}
