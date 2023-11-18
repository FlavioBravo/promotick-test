import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CoreInterceptor } from "./interceptors/core.interceptor";

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CoreInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
