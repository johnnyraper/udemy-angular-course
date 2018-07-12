import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe 1 Lorem', 'Food is where the heart is', 'https://loremflickr.com/600/400/food'),
    new Recipe('Recipe 2 Ipsum', 'I love my food', 'https://loremflickr.com/600/410/food')
  ];

  constructor() { }

  ngOnInit() {
  }

}
