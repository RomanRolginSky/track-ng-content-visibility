import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TemplateProviderComponent } from './template-provider.component';
import { MathComponent } from './math.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TemplateProviderComponent, MathComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
