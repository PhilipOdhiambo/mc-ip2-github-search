import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

const materialModule = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule
]

@NgModule({
  imports: [materialModule],
  exports: [materialModule]
})
export class MaterialModule { }
