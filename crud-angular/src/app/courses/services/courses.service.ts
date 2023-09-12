import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '../src/assets/courses.json';

  constructor(private httpCliente: HttpClient) { }

  list() {
    return this.httpCliente.get<Course[]>(this.API).pipe(
      tap(courses => console.log("teste"))
    );
  }
}
