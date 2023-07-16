import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularPipeComponent } from './angular-pipe/angular-pipe.component';
import { YellowDirective } from './yellow.directive';

@NgModule({
  declarations: [AppComponent,AngularPipeComponent, YellowDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
