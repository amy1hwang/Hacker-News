import { Component, Input } from '@angular/core';
import { Article } from './../article.model';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent {
  // scienceArticleList: Article[] =  [
  //   new Article('Ansible at Grofers (Part 1) – Introduction', "(grofers.com)", "1 point by vaidik 4 minutes", "science")
  // ];
  @Input() scienceArticleList: Article[];

  // for (var i = 0; i < masterArticleList.length; i++) {
  //   if (input[i].category === "science") {
  //     scienceArticleList.push(input[i]);
  //   }
  //   return scienceArticleList;
  // }
}
