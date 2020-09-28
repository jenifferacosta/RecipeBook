import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
  onRecipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://img.kidspot.com.au/MlkZW4KR/w643-h428-cfill-q90/kk/2017/06/1930-503498-1.jpg'),
    new Recipe('A test recipe 2', 'This is simply a testslkdfknd', 'https://img.kidspot.com.au/MlkZW4KR/w643-h428-cfill-q90/kk/2017/06/1930-503498-1.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }



}
