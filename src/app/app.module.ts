import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './headerComponent/headerComponent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InrToUsdPipe } from './pipes/inr-to-usd.pipe';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, InrToUsdPipe
  ],
  imports: [
    BrowserModule, FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
