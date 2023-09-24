import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { tap, first, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/api/courses';

  constructor(private httpCliente: HttpClient) { }

  list() {
    return this.httpCliente.get<Course[]>(this.API)
    .pipe(
      first()
    );
  }

  save(record: Partial<Course>) {
    return this.httpCliente.post<Course>(this.API, record)
    .pipe(first());
  }
}
