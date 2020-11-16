import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  toShoppingList() {
    for (var ingredient of this.recipeDetail.ingredients) {
      this.shoppingListService.addIngredients(ingredient);
    }
  }

}
