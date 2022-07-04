import {NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {ComponentsModule} from "../components/components.module";
import {InformationComponent} from "./information/information.component";
import {HeaderComponent} from "./header/header.component";
import {NewsComponent} from "./news/news.component";
import {RulesComponent} from "./rules/rules.component";
import {CommonModule} from "@angular/common";
import {StreamComponent} from "./stream/stream.component";

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule
  ],
  declarations: [MainComponent, InformationComponent, HeaderComponent, NewsComponent, RulesComponent, StreamComponent],
  exports: [MainComponent]
})
export class PagesModel {
}
