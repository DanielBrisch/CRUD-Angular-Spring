import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses = this.coursesService.list().pipe(
      catchError(error => {
        this.onError('Erro ao Carregar Cursos');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  // nao deu certo usar o onAdd, por algum motivo parece que ele nao chamava esse metodo quando usava o click no botao
  // onAdd() {
  //   console.log('onAdd() called');
  //   this.router.navigate(['new'], { relativeTo: this.route })
  // }

  ngOnInit(): void {}
}
