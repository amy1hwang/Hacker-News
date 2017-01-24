import { Component,  Input} from '@angular/core';
import { Article } from './../article.model';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  masterArticleList: Article[] = [
    new Article('Ansible at Grofers (Part 1) – Introduction', "(grofers.com)", "1 point by vaidik 4 minutes", "science"),
    new Article('The Modern Developer: Capabilities Beyond Tech', '(medium.com)','2 point by vaidik 4 minutes', "tech"),
    new Article('	Thank you, StackOverflow: How I learned to code', '(hackermoon.com)', '2 point by vaidik 4 minutes', "tech"),
    new Article('	The White House is adding four ‘Skype Seats’ to its press briefings ', '(techcrunch.com)', '2 point by vaidik 4 minutes', "politics"),
    new Article('	Five of The Happiest Countries for Expats', '(bbc.com)', '1 point by vaidik 4 minutes', "global"),
  ]

  filterByCategory: string = "all";

  onClick(optionFromMenu) {
  this.filterByCategory = optionFromMenu;
  }
}

// export class Article {
//   constructor(public title: string, public link: string, public comments: string) { }
// }
