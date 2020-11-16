import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  onRecipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe',
    'This is simply a test',
    'https://img.kidspot.com.au/MlkZW4KR/w643-h428-cfill-q90/kk/2017/06/1930-503498-1.jpg',
    [
      new Ingredient('Eggs', 2),
      new Ingredient('Lemons', 6)
    ]),
    new Recipe('A test recipe 2', 'This is simply a testslkdfknd', 'https://img.kidspot.com.au/MlkZW4KR/w643-h428-cfill-q90/kk/2017/06/1930-503498-1.jpg', [
    new Ingredient('Lemons', 6),
    new Ingredient('Flour', 300)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }



}
