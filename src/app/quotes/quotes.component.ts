import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quoteModel: Quote;
  showNew: Boolean = false;
  submitType: string = 'Save';


  onNew() {
    this.quoteModel = new Quote("", "", "", new Date(), 0, 0);
    this.submitType = 'Save';
    this.showNew = true;
  }


  onSave() {
    if (this.submitType === 'Save') {
      this.quotes.push(this.quoteModel);
    }

    this.showNew = false;
  }


  onCancel() {
    this.showNew = false;
  }

  quotes = [
    new Quote(' A lion does not concern himself with the opinions of a sheep', 'Tywin Lannister', 'GGSolomon', new Date(2020, 10, 8, 23, 1), 0, 0),
    new Quote(' Power resides where men believe it does. It’s a trick, a shadow on the wall. And a very small man can cast a large shadow', 'Lord Varys', 'GGSolomon', new Date(2020, 10, 7, 12, 4), 0, 0),
    new Quote(' Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you.', 'Tyrion Lannister', 'GGSolomon', new Date(2020, 10, 9, 11, 4), 0, 0),
    new Quote(' Leave one wolf alive & the Sheep are never Safe', 'Arya Stark', 'GGSolomon', new Date(2020, 10, 8, 23, 1), 0, 0),
    new Quote(' Chaos isn’t a pit. Chaos is a ladder. Many who try to climb it fail and never get to try again. The fall breaks them', 'Petyr Baelish', 'GGSolomon', new Date(2020, 10, 8, 7, 43), 0, 0),
    new Quote(' They were the shields that guarded the realms of men. And we shall never see their like again.', 'Jon Snow', 'GGSolomon', new Date(2020, 10, 9, 7, 45), 0, 0),
    new Quote(' Any man who must say I am the king is no true king', 'Tywin Lannister', 'GGSolomon', new Date(2020, 10, 9, 13, 1), 0, 0),
    new Quote(' When the snows fall and the white winds blow, only the lone wolf dies but the pack survives.', 'Ned Stark', 'GGSolomon', new Date(2020, 10, 8, 7, 49), 0, 0),
    new Quote(' There is only one god and his name is Death, and there is only one thing we say to Death: ‘Not today‘.', 'Syrio Forel', 'GGSolomon', new Date(2020, 10, 8, 13, 4), 0, 0)
    
  ];



  delete(i) {
    this.quotes.splice(i, 1);
      }

  constructor() { }

  ngOnInit() {
  }

}
