import { Pipe, PipeTransform } from '@angular/core';
import {Article} from './article.model';

@Pipe({
  name: 'categoryPipe',
  pure: false
})
export class CategoryPipePipe implements PipeTransform {

  transform(input: Article[], sortCategory){
    var output: Article[] = [];
    if(sortCategory === "science") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "science") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (sortCategory === "politics") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "politics") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (sortCategory === "tech") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "tech") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (sortCategory === "global") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "global") {
          output.push(input[i]);
        }
      }
      return output;
    }

    else {
      return input;
    }
  }
}
