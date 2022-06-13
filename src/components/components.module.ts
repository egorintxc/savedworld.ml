import {NgModule} from "@angular/core";
import {AngularSvgIconModule} from "angular-svg-icon";
import {HttpClientModule} from "@angular/common/http";
import {SideBarComponent} from "./side-bar/side-bar.component";
import {LinkComponent} from "./link/link.component";
import {CommonModule} from "@angular/common";
import {ButtonComponent} from "./button/button.component";

@NgModule({
  imports: [
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    CommonModule
  ],
  declarations: [SideBarComponent, LinkComponent, ButtonComponent],
  exports: [SideBarComponent, ButtonComponent]
})
export class ComponentsModule {
}
