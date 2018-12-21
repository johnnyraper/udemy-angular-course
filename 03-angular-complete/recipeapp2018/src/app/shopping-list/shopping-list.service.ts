import { Ingredient } from '../shared/ingredient.model';

// A service is a TypeScript class

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Sugar', 100),
    new Ingredient('Flour', 500),
    new Ingredient('Eggs', 3),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
}
