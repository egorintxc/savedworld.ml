import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  text: string = 'клик для копирования';

  constructor() {
  }

  ngOnInit(): void {
  }

  copeMessage() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = 'sw-play.ml';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    setTimeout(() => {
      this.text = 'успешно скопировано'
    }, 200)
    setTimeout(() => {
      this.text = 'клик для копирования'
    }, 10000)
  }
}
