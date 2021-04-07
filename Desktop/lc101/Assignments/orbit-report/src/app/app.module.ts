import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';
import { HighlightDirective } from './highlight.directive';
import { WarningDirective } from './warning.directive';

@NgModule({
  declarations: [
    AppComponent,
    OrbitListComponent,
    HighlightDirective,
    WarningDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
