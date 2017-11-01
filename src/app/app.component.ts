import { Component } from '@angular/core';
export class Hero{
  id: number;
  name: string;
}

//Component Decorator requires a selector and template
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Hero app';
  hero:Hero = {
    id : 1,
    name: 'Doomfist'
  };
}
