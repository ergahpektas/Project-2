import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';


// this is new comment
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
