import { Component, OnInit } from "@angular/core";
import { CourseService } from "../course.service";
import { Course } from "../course";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  courses: Array<Course> = [];
  constructor(private service: CourseService) {}

  ngOnInit() {
    this.service.getCourses().subscribe(courses => (this.courses = courses));
  }
}
