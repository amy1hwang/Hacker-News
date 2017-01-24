import { Component, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    filterByCategory: string = "all";

    onClick(clickedCategory) {
    this.filterByCategory = clickedCategory;
    }
}
