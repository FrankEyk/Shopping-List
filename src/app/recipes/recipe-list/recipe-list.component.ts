import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
@Output() loadRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe1',
      'This is a test1',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FexWyqMhrKQY%2Fmaxresdefault.jpg&f=1&nofb=1'
    ),
    new Recipe(
      'Test Recipe2',
      'This is a test2',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FexWyqMhrKQY%2Fmaxresdefault.jpg&f=1&nofb=1'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  showRecipe(recipe: Recipe): void {
    this.loadRecipe.emit(recipe);
  }
}
