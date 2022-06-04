import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.less']
})
export class LinkComponent {
  @Input()
  title: string = '';

  @Input()
  logo: string = '';

  @Input()
  isActive: boolean = false;

  returnCurrentLink(): string {
    return `/assets/icons/${this.logo}.svg`;
  }
}
