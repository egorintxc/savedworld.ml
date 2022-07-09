import { Component } from '@angular/core';
import {SidebarService} from "../../services/sidebar.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent{
  constructor(private sideBarService: SidebarService) {
  }
  changeStars() {
    this.sideBarService.handleChangeStars.next(null);
  }
}
