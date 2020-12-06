import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-item/recipe.model'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://pittsburgh.cbslocal.com/wp-content/uploads/sites/15909642/2015/11/recipes-1024x576.jpg?w=1024&h=576&crop=1'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://pittsburgh.cbslocal.com/wp-content/uploads/sites/15909642/2015/11/recipes-1024x576.jpg?w=1024&h=576&crop=1')
  ];

  constructor() { }

  ngOnInit() {
  }

}
