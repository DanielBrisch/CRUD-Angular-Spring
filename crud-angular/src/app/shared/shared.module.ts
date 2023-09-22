import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CategoryPipe } from './pipes/category.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports: [
    ErrorDialogComponent,
    MatButtonModule,
    MatIconModule,
    CategoryPipe,
    MatFormFieldModule
  ]
})
export class SharedModule { }
