import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PtHeaderComponent } from './pt-header/pt-header.component';
import { PtFooterComponent } from './pt-footer/pt-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PtHeaderComponent,
    PtFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
