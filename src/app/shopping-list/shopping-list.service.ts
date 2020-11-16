import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 3)
  ];

  addIngredients(ingredient: Ingredient) {
    return this.ingredients.push(ingredient);
  }

  getIngredients() {
    return this.ingredients;
  }
}
