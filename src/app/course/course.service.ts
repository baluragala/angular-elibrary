import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Course } from "./course";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Array<Course>> {
    return this.http.get<Array<Course>>(`${environment.apiUrl}/courses`);
  }

  getCourse(courseId: number): Observable<Course> {
    return this.http.get<Course>(`${environment.apiUrl}/courses/${courseId}`);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${environment.apiUrl}/courses`, course);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(
      `${environment.apiUrl}/courses/${course.id}`,
      course
    );
  }
}
