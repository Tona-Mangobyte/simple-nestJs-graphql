import { Injectable, NotFoundException } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  private recipes: Recipe[] = [
    {
      id: '1001',
      title: 'simple 001',
      description: 'desc',
      creationDate: new Date(),
      ingredients: null,
    },
    {
      id: '1002',
      title: 'simple 002',
      description: 'desc2',
      creationDate: new Date(),
      ingredients: null,
    },
    {
      id: '1003',
      title: 'simple 003',
      description: 'desc3',
      creationDate: new Date(),
      ingredients: null,
    }
  ];

  async create(data: NewRecipeInput): Promise<Recipe> {
    const recipe = new Recipe();
    recipe.id = (this.recipes.length + 1).toString();
    recipe.title = data.title;
    recipe.description = data.description;
    recipe.ingredients = data.ingredients;
    recipe.creationDate = new Date();
    this.recipes.push(recipe);
    return recipe;
  }

  async findOneById(id: string): Promise<Recipe> {
    const result = this.recipes.filter(r => r.id === id);
    console.log(result);
    if (result.length === 0) {
      throw new NotFoundException(id);
    }
    return result[0];
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipes;
  }

  async remove(id: string): Promise<boolean> {
    this.recipes.splice(this.recipes.findIndex(r => r.id === id), 1);
    return true;
  }
}
