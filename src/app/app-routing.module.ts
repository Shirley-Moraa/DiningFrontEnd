import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeniorDetailsComponent } from './senior-details/senior-details.component';
import { CreateSeniorComponent } from './create-senior/create-senior.component';
import { SeniorListComponent } from './senior-list/senior-list.component';
import { UpdateSeniorComponent } from './update-senior/update-senior.component';

import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';

import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
//import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: 'senior', pathMatch: 'full' },
  { path: 'seniors', component: SeniorListComponent },
  { path: 'add', component: CreateSeniorComponent },
  { path: 'update/:id', component: UpdateSeniorComponent },
  { path: 'details/:id', component: SeniorDetailsComponent }, 
  { path: 'recipes', component: RecipeListComponent },
  { path: 'addRecipe', component: CreateRecipeComponent },
  { path: 'updateRecipe/:id', component: UpdateRecipeComponent },
  { path: 'detailsRecipe/:id', component: RecipeDetailsComponent },

  { path: 'menus', component: MenuListComponent },
  { path: 'addMenu', component: CreateMenuComponent },
 // { path: 'updateRecipe/:id', component: UpdateRecipeComponent },
  { path: 'detailsMenu/:id', component: MenuDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
