import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  onSelected(){
    this.recipeSelected.emit();
  }

  ngOnInit(): void {
  }

}
