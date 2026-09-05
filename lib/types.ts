export type Difficulty = 'easy' | 'medium' | 'hard';
export type Category = 'high-protein' | 'low-calorie' | 'sweet' | 'savory' | 'quick' | 'meal-prep';

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export interface Recipe {
  id: string;
  name: string;
  image: string;
  description: string;
  servings: number;
  prepTime: number;
  cookTime: number;
  difficulty: Difficulty;
  categories: Category[];
  ingredients: Ingredient[];
  instructions: string[];
  tips: string[];
  substitutions: { [key: string]: string[] };
  nutrition: NutritionInfo;
}

export interface UserPreferences {
  maxCalories?: number;
  minProtein?: number;
  maxPrepTime?: number;
  preferredCategories?: Category[];
}

export interface MealPlan {
  [day: string]: Recipe | null;
}

export interface ShoppingListItem {
  name: string;
  amount: number;
  unit: string;
  checked: boolean;
}
