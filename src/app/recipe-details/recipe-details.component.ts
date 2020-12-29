import { Recipe } from '../recipe';
import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['recipes']);
  }

}
