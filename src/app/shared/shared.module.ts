import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterModule } from "@angular/router";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

const SHARED_COMPONENTS = [FooterComponent, NavbarComponent, SearchBarComponent];

@NgModule({
  declarations: SHARED_COMPONENTS,
  exports: SHARED_COMPONENTS,
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
