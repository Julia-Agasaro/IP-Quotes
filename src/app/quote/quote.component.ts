import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote [] = [
    new Quote(1,'The Way Get Started Is To Quit Talking And Begin Doing', 'Walt Disney','Julia Agasaro', new Date(2019,8,25)),
    new Quote(2,'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.','Unknown','Naice Uwitonze', new Date(2019,8,25)),
    new Quote(3,'Don’t Let Yesterday Take Up Too Much Of Today.', 'Will Rogers','Eliane Kamana', new Date(2019,8,25)),
    new Quote(4,'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.', 'Vince Lombardi', 'Will Smith', new Date(2019,8,25)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isDelete, index){
    if (isDelete) {
      this.quotes.splice(index,1);
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
