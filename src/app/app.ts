import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from '@xalpol12/ngx-artist-portfolio';

@Component({
  selector: 'app-root',
  template: `
    <apw-layout/>
  `,
  imports: [LayoutComponent],
})
export class App {
}
