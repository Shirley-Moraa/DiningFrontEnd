import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSeniorComponent } from './create-senior/create-senior.component';
import { SeniorDetailsComponent } from './senior-details/senior-details.component';
import { SeniorListComponent } from './senior-list/senior-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateSeniorComponent } from './update-senior/update-senior.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSeniorComponent,
    SeniorDetailsComponent,
    SeniorListComponent,
    UpdateSeniorComponent,
    CreateRecipeComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    UpdateRecipeComponent,
    CreateMenuComponent,
    MenuDetailsComponent,
    MenuListComponent,
    UpdateMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
