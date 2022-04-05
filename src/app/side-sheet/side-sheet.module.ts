import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@NgModule({
  declarations: [
    ContactDetailsComponent
  ],
  entryComponents: [
    ContactDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SideSheetModule { }
