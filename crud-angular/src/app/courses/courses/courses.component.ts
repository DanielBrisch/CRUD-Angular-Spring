import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {


  courses: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService,
    public dialog: MatDialog
    ) {
    this.courses = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao Carregar Cursos')
        return of([])
      })
    );
  }

  onError(errorMsg: String) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

}
