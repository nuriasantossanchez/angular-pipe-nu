import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-angular-pipe',
  templateUrl: './angular-pipe.component.html',
})
export class AngularPipeComponent {
  pi: number = 3.141592;
  text: string = 'Hola mundo!';
  price: number = 3.456;
  today: number = Date.now();
}
