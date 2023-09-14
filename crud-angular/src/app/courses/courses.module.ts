import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/AppMaterialModule';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from '../app.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    MatTableModule,
    SharedModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class CoursesModule { }
