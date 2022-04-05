import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactCardComponent } from './contact-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ContactCardComponent
  ],
  exports: [
    ContactCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ContactCardModule { }
