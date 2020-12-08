import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { Recipe } from './recipe-list/recipe.model';
@Injectable()

export class RecipeService
{
    
    recipeSelected = new EventEmitter<Recipe>();  



  private  recipes: Recipe[] = [
        new Recipe('A Test Recipe',  
        'This is simply a test',
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg' ,
         [new Ingredient('Meat',1),
         new Ingredient('fries',1)]),
        new Recipe('Another Test Recipe',
         'This is simply a test',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
          [new Ingredient('Meat',1),
          new Ingredient('buns',1)])
 
    ];
    constructor(private slService:ShoppingListComponent)
{}
getRecipes()
{
    return this.recipes.slice ();
}
addIngredientToshoppingList(ingredient:Ingredient)
{
this.slService.addIngredients(ingredients);
}
}