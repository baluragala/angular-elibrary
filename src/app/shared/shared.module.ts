import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./nav/nav.component";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  imports: [CommonModule, RouterModule.forChild([])],
  declarations: [NavComponent, NotFoundComponent],
  exports: [NavComponent, NotFoundComponent]
})
export class SharedModule {}
