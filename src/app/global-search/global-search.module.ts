import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalSearchComponent } from './global-search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GlobalSearchStateService } from './services/global-search.state-service';

@NgModule({
  declarations: [
    GlobalSearchComponent
  ],
  exports: [
    GlobalSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    
  ],
})
export class GlobalSearchModule { }
