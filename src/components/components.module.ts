import {NgModule} from "@angular/core";
import {AngularSvgIconModule} from "angular-svg-icon";
import {HttpClientModule} from "@angular/common/http";
import {SideBarComponent} from "./side-bar/side-bar.component";
import {LinkComponent} from "./link/link.component";

@NgModule({
  imports: [
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  declarations: [SideBarComponent, LinkComponent],
  exports: [SideBarComponent]
})
export class ComponentsModule {
}
