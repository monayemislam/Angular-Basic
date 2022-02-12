import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .h1-title{
    color: darkblue;
  }
  `]
})
export class AppComponent {
  title = 'the-basic';
}
