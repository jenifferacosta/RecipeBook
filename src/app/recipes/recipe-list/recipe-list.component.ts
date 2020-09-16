import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://img.kidspot.com.au/MlkZW4KR/w643-h428-cfill-q90/kk/2017/06/1930-503498-1.jpg'),
    new Recipe('A test recipe 2', 'This is simply a test', 'https://img.kidspot.com.au/MlkZW4KR/w643-h428-cfill-q90/kk/2017/06/1930-503498-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
