import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {

  id: number;
  recipe: Recipe;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = new Recipe();

    this.id = this.route.snapshot.params['id'];
    
    this.recipeService.getRecipe(this.id)
      .subscribe(data => {
        console.log(data)
        this.recipe = data;
      }, error => console.log(error));
  }

  updateRecipe() {
    this.recipeService.updateRecipe(this.id, this.recipe)
      .subscribe(data => {
        console.log(data);
        this.recipe = new Recipe();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateRecipe();    
  }

  gotoList() {
    this.router.navigate(['/recipes']);
    
  }

}
