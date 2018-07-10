import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    h1{
      color: red
    }
  `]
})
export class AppComponent {
  title = 'Angular App';
  course = {
    title : 'My Courses',
    isActive : true
  };
  onActiveClick(activeObject) {
    console.log('Active is Clicked !!', activeObject);
  }
}
