import { RecipeService } from '../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  recipe : Recipe = new Recipe();
  submitted = false;

  constructor(private recipeService : RecipeService,
    private router : Router) { }

  ngOnInit() {
  }

  newRecipe(): void {
    this.submitted = false;
    this.recipe = new Recipe();
  }
  save() {
    this.recipeService
    .createRecipe(this.recipe).subscribe(data => {
      console.log(data)
      this.recipe = new Recipe();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save(); 
      
  }

  gotoList() {
    this.router.navigate(['/recipes']);
  }

}
