import { Route } from "@angular/router";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";

export const COURSE_ROUTES: Route[] = [
  {
    path: "courses",
    component: CourseListComponent
  },
  {
    path: "courses/:courseId",
    component: CourseDetailComponent
  }
];
