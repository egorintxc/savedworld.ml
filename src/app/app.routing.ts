import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "../pages/main/main.component";
import {InformationComponent} from "../pages/information/information.component";

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'play',
    component: InformationComponent,
  },
  {path: '', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
