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
    {id: 'information', title: 'Информация', isActive: false, isRoute: false, isDeActive: false},
    {id: 'our-servers', title: 'Наши сервера', isActive: false, isRoute: false, isDeActive: false},
    {id: 'rules', title: 'Правила', isActive: false, isRoute: false, isDeActive: false},
    {id: 'streamers', title: 'Стримеры', isActive: false, isRoute: false, isDeActive: false},
    {id: 'support', title: 'Поддержать', isActive: false, isRoute: false, isDeActive: false},
  ]
  lastActiveID = 'main';

  ngOnInit(): void {
    setTimeout(() => {
      this.linkArray.map((item: Link) => {
        item.id === this.lastActiveID ? item.isActive = true : item.isActive = false;
      })
    }, 50)
  }

  /* coord = {
     x: 0,
     y: 0
   }
   sizeButtonLink = {w: 120, h: 30}*/

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

  title = {
    first: 'Discord',
    second: 'Вконтакте'
  }

  changeFocus(position: 'top' | 'bottom', type: 'in' | 'out') {
    if (type === 'out') {
      this.title = {
        first: 'Discord',
        second: 'Вконтакте'
      }
    } else if (type === 'in' && position === 'top') {
      this.title.second = '*Тут мы общаемся*';
    } else if (type === 'in' && position === 'bottom') {
      this.title.first = 'Новости, фото и мемы';

    }
  }
}
