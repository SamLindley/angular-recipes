import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'http://research.msu.edu/wp-content/uploads/2015/10/world-food-day-2015.jpg'),
    new Recipe('A Test Recipe', 'This is a test', 'http://research.msu.edu/wp-content/uploads/2015/10/world-food-day-2015.jpg'),
    new Recipe('A Test Recipe', 'This is a test', 'http://research.msu.edu/wp-content/uploads/2015/10/world-food-day-2015.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
