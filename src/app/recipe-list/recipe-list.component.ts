import { Component, OnInit } from '@angular/core';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { Observable } from "rxjs";
import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipe";
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Observable<Recipe[]>;


  constructor(private recipeService: RecipeService,
    private router: Router) {}


  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.recipes = this.recipeService.getRecipesList();
  }
  
  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  recipeDetails(id: number){
    this.router.navigate(['detailsRecipe', id]);
  }

  updateRecipe(id: number){
    this.router.navigate(['updateRecipe',id]);
  }

}
