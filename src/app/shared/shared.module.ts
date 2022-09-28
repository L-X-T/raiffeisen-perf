import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CityPipe } from './pipes/city.pipe';
import { LazyImageDirective } from './directives/lazy-image.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CityPipe, LazyImageDirective],
  exports: [CityPipe, FormsModule]
})
export class SharedModule {}
