import { Component, OnInit } from "@angular/core";
import { CourseService } from "../course.service";
import { Course } from "../course";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.css"]
})
export class CourseDetailComponent implements OnInit {
  course: Course;
  constructor(
    private service: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.service
      .getCourse(parseInt(this.route.snapshot.params["courseId"]))
      .subscribe(course => (this.course = course));
  }

  goBack() {
    this.router.navigate(["/courses"]);
  }
}
