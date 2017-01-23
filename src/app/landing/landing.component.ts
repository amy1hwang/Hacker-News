import { Component,  Input} from '@angular/core';
import { Article } from './../article.model';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  masterArticleList: Article[] = [
    new Article('Ansible at Grofers (Part 1) – Introduction', "(grofers.com)", "1 point by vaidik 4 minutes"),
    new Article('The Modern Developer: Capabilities Beyond Tech', '(medium.com)','2 point by vaidik 4 minutes'),
    new Article('	Thank you, StackOverflow: How I learned to code', '(hackermoon.com)', '2 point by vaidik 4 minutes')
  ]
}

// export class Article {
//   constructor(public title: string, public link: string, public comments: string) { }
// }
