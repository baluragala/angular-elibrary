import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseListComponent } from "./course-list/course-list.component";
import { HttpClientModule } from "@angular/common/http";
import { CourseService } from "./course.service";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { RouterModule } from "@angular/router";
import { COURSE_ROUTES } from "./course.routes";
import { CourseListItemComponent } from './course-list-item/course-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(COURSE_ROUTES)
  ],
  declarations: [CourseListComponent, CourseDetailComponent, CourseListItemComponent],
  exports: [CourseListComponent],
  providers: [CourseService]
})
export class CourseModule {}
