import {Component, OnInit} from '@angular/core';
import {Link} from "../../modules/link";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {
  public readonly STARS = 'stars';
  public linkArray: Array<Link> = [
    {id: 'main', title: 'Главная', isActive: false, isRoute: false, isDeActive: false},
    {id: 'rules', title: 'Правила', isActive: false, isRoute: false, isDeActive: false},
    {id: 'streamers', title: 'Стримеры', isActive: false, isRoute: false, isDeActive: false},
    {id: 'play', title: 'Начать играть', isActive: false, isRoute: false, isDeActive: false},
    {id: 'call', title: 'Связаться с нами', isActive: false, isRoute: false, isDeActive: false},
  ]
  lastActiveID = 'main';

  ngOnInit(): void {
    setTimeout(() => {
      this.linkArray.map((item: Link) => {
        item.id === this.lastActiveID ? item.isActive = true : item.isActive = false;
      })
    }, 50)
  }

  changePosition(event: any, id: string) {
    if (event.target.alt !== this.STARS) {
      this.linkArray.map((item: Link) => {
        item.id === this.lastActiveID ? item.isDeActive = true : item.isDeActive = false;
      })
      setTimeout(() => {
        this.linkArray.map((item: Link) => {
          item.id === id ? item.isActive = true : item.isActive = false;
        })
      }, 700)
      setTimeout(() => {
        this.linkArray.map((item: Link) => {
          item.isDeActive = false;
        })
      }, 710)

    }
    this.lastActiveID = id;
  }
}
