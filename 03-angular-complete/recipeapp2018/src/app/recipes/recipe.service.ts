import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Recipe 1 Lorem', 'Food is where the heart is', 'https://loremflickr.com/600/400/food'),
    new Recipe('Recipe 2 Ipsum', 'I love my food', 'https://loremflickr.com/600/410/food')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

/*
.slice() returns a new array, which is an exact copy of the one above

 A service is a TypeScript class
*/
