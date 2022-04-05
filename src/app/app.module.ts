import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from './menu/menu.module';
import { HeaderModule } from './header/header.module';
import { APP_PROVIDERS } from './app.providers';
import { SideSheetModule } from './side-sheet/side-sheet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SideSheetModule,
    
    HeaderModule,
    MenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: APP_PROVIDERS,
  bootstrap: [AppComponent]
})
export class AppModule { }
