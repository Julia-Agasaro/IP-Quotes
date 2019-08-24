import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes:string[];
  constructor(){
    this.quotes = ['The Way Get Started Is To Quit Talking And Begin Doing', 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.', 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.','Don’t Let Yesterday Take Up Too Much Of Today.']
  } 
}
