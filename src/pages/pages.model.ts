import {NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {ComponentsModule} from "../components/components.module";
import {InformationComponent} from "./information/information.component";
import {HeaderComponent} from "./header/header.component";
import {NewsComponent} from "./news/news.component";

@NgModule({
    imports: [
        ComponentsModule
    ],
  declarations: [MainComponent,InformationComponent,HeaderComponent, NewsComponent],
  exports: [MainComponent]
})
export class PagesModel {
}
