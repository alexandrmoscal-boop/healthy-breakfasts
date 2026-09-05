import { Recipe } from './types';
import { recipes as recipesPartOne } from './recipes';

const recipesPartTwo: Recipe[] = [
  {
    id: '11',
    name: 'Almond Flour Pancakes',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    description: 'Low-carb almond flour pancakes with berries and almond butter',
    servings: 2,
    prepTime: 5,
    cookTime: 10,
    difficulty: 'easy',
    categories: ['sweet', 'low-calorie', 'quick'],
    ingredients: [
      { name: 'Almond flour', amount: 100, unit: 'g' },
      { name: 'Eggs', amount: 3, unit: 'count' },
      { name: 'Almond butter', amount: 40, unit: 'g' },
      { name: 'Vanilla extract', amount: 5, unit: 'ml' },
      { name: 'Cinnamon', amount: 3, unit: 'g' },
      { name: 'Blueberries', amount: 100, unit: 'g' }
    ],
    instructions: [
      'Blend almond flour, eggs, almond butter, vanilla, and cinnamon',
      'Heat butter in skillet over medium heat',
      'Pour small pancakes and cook 2 minutes per side',
      'Top with fresh blueberries',
      'Serve warm'
    ],
    tips: [
      'Batter will be thinner than regular pancakes',
      'Don\'t flip too early or they will break',
      'Make ahead and reheat in toaster'
    ],
    substitutions: {
      'Blueberries': ['strawberries', 'raspberries', 'bananas'],
      'Almond butter': ['peanut butter', 'tahini'],
      'Almond flour': ['coconut flour (use less)']
    },
    nutrition: { calories: 320, protein: 12, fat: 24, carbs: 14 }
  },
  {
    id: '12',
    name: 'Protein Energy Balls',
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd41b66?w=400&h=300&fit=crop',
    description: 'No-bake energy balls with oats, dates, and protein powder',
    servings: 4,
    prepTime: 15,
    cookTime: 0,
    difficulty: 'easy',
    categories: ['high-protein', 'meal-prep', 'sweet'],
    ingredients: [
      { name: 'Rolled oats', amount: 100, unit: 'g' },
      { name: 'Dates', amount: 120, unit: 'g' },
      { name: 'Protein powder', amount: 50, unit: 'g' },
      { name: 'Almond butter', amount: 60, unit: 'g' },
      { name: 'Coconut oil', amount: 20, unit: 'ml' },
      { name: 'Dark chocolate chips', amount: 40, unit: 'g' }
    ],
    instructions: [
      'Blend dates into paste',
      'Mix all ingredients except chocolate chips',
      'Roll into 12 balls',
      'Melt chocolate and dip balls',
      'Refrigerate for 30 minutes'
    ],
    tips: [
      'Store in refrigerator for up to 1 week',
      'Use a small cookie scoop for uniform sizes',
      'Dust with cocoa powder instead of chocolate if preferred'
    ],
    substitutions: {
      'Dates': ['raisins', 'figs', 'dried apricots'],
      'Almond butter': ['peanut butter', 'cashew butter'],
      'Dark chocolate': ['milk chocolate', 'white chocolate']
    },
    nutrition: { calories: 285, protein: 12, fat: 16, carbs: 28 }
  },
  {
    id: '13',
    name: 'Buckwheat Crepes',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    description: 'Gluten-free buckwheat crepes with Greek yogurt and berries',
    servings: 2,
    prepTime: 10,
    cookTime: 12,
    difficulty: 'medium',
    categories: ['sweet', 'high-protein'],
    ingredients: [
      { name: 'Buckwheat flour', amount: 100, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'count' },
      { name: 'Almond milk', amount: 250, unit: 'ml' },
      { name: 'Greek yogurt', amount: 100, unit: 'g' },
      { name: 'Mixed berries', amount: 150, unit: 'g' },
      { name: 'Honey', amount: 15, unit: 'g' }
    ],
    instructions: [
      'Mix flour, eggs, and milk until smooth',
      'Let batter rest 30 minutes',
      'Heat butter in 8-inch nonstick skillet',
      'Pour 1/4 cup batter, tilt to spread thin',
      'Cook 1-2 minutes per side',
      'Fill with yogurt and berries, drizzle with honey'
    ],
    tips: [
      'Buckwheat creates a nutty, delicate crepe',
      'Let batter rest before cooking',
      'Stack cooked crepes on plate to keep warm'
    ],
    substitutions: {
      'Buckwheat flour': ['whole wheat', 'regular flour'],
      'Greek yogurt': ['cottage cheese', 'ricotta'],
      'Mixed berries': ['sliced bananas', 'sliced strawberries']
    },
    nutrition: { calories: 295, protein: 14, fat: 7, carbs: 44 }
  },
  {
    id: '14',
    name: 'Superfood Acai Smoothie',
    image: 'https://images.unsplash.com/photo-1590080875657-61b96ba14fac?w=400&h=300&fit=crop',
    description: 'Blend of acai, spinach, maca powder, and plant-based protein',
    servings: 1,
    prepTime: 3,
    cookTime: 0,
    difficulty: 'easy',
    categories: ['high-protein', 'quick', 'low-calorie'],
    ingredients: [
      { name: 'Acai puree', amount: 100, unit: 'g' },
      { name: 'Spinach', amount: 30, unit: 'g' },
      { name: 'Banana', amount: 60, unit: 'g' },
      { name: 'Plant protein powder', amount: 25, unit: 'g' },
      { name: 'Coconut milk', amount: 200, unit: 'ml' },
      { name: 'Maca powder', amount: 5, unit: 'g' }
    ],
    instructions: [
      'Add all ingredients to blender',
      'Blend until smooth and creamy',
      'Pour into glass',
      'Serve immediately'
    ],
    tips: [
      'Use frozen acai packs for convenience',
      'Add ice for colder smoothie',
      'Maca adds energy boost and nutty flavor'
    ],
    substitutions: {
      'Acai': ['blueberries', 'raspberry', 'blackberries'],
      'Plant protein': ['whey protein', 'collagen'],
      'Maca powder': ['cacao powder', 'spirulina']
    },
    nutrition: { calories: 340, protein: 22, fat: 12, carbs: 38 }
  },
  {
    id: '15',
    name: 'Savory Breakfast Burrito',
    image: 'https://images.unsplash.com/photo-1599866726632-29d6e91e9068?w=400&h=300&fit=crop',
    description: 'Whole wheat tortilla with scrambled eggs, black beans, and salsa',
    servings: 1,
    prepTime: 5,
    cookTime: 10,
    difficulty: 'easy',
    categories: ['high-protein', 'savory', 'meal-prep'],
    ingredients: [
      { name: 'Whole wheat tortilla', amount: 50, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'count' },
      { name: 'Black beans', amount: 80, unit: 'g' },
      { name: 'Bell peppers', amount: 60, unit: 'g' },
      { name: 'Cheddar cheese', amount: 30, unit: 'g' },
      { name: 'Salsa', amount: 40, unit: 'g' }
    ],
    instructions: [
      'Scramble eggs with salt and pepper',
      'Heat black beans',
      'Sauté bell peppers',
      'Warm tortilla',
      'Layer eggs, beans, peppers, cheese, and salsa',
      'Roll tightly and serve'
    ],
    tips: [
      'Can be made ahead and wrapped in foil',
      'Reheat in microwave for 1-2 minutes',
      'Add avocado for healthy fat'
    ],
    substitutions: {
      'Black beans': ['pinto beans', 'refried beans'],
      'Bell peppers': ['onions', 'mushrooms', 'tomatoes'],
      'Cheddar': ['Mexican blend', 'pepper jack']
    },
    nutrition: { calories: 380, protein: 18, fat: 14, carbs: 42 }
  },
  {
    id: '16',
    name: 'Pumpkin Spice Oatmeal',
    image: 'https://images.unsplash.com/photo-1574080074838-a5c2cc1f1f2a?w=400&h=300&fit=crop',
    description: 'Creamy pumpkin oatmeal with warming spices and pecans',
    servings: 1,
    prepTime: 2,
    cookTime: 7,
    difficulty: 'easy',
    categories: ['sweet', 'quick', 'meal-prep'],
    ingredients: [
      { name: 'Rolled oats', amount: 50, unit: 'g' },
      { name: 'Pumpkin puree', amount: 80, unit: 'g' },
      { name: 'Almond milk', amount: 200, unit: 'ml' },
      { name: 'Maple syrup', amount: 15, unit: 'g' },
      { name: 'Pumpkin pie spice', amount: 3, unit: 'g' },
      { name: 'Pecans', amount: 25, unit: 'g' }
    ],
    instructions: [
      'Cook oats with almond milk and pumpkin spice',
      'Stir in pumpkin puree',
      'Add maple syrup',
      'Top with chopped pecans',
      'Serve immediately'
    ],
    tips: [
      'Make extra and reheat with milk in morning',
      'Use canned pumpkin for convenience',
      'Add vanilla extract for more depth'
    ],
    substitutions: {
      'Pumpkin puree': ['sweet potato puree', 'butternut squash'],
      'Pecans': ['walnuts', 'almonds', 'hazelnuts'],
      'Almond milk': ['oat milk', 'regular milk']
    },
    nutrition: { calories: 360, protein: 8, fat: 14, carbs: 48 }
  },
  {
    id: '17',
    name: 'Tuna Salad on Whole Grain',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    description: 'Protein-rich tuna salad with celery and whole grain crackers',
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    difficulty: 'easy',
    categories: ['high-protein', 'savory', 'quick'],
    ingredients: [
      { name: 'Canned tuna', amount: 100, unit: 'g' },
      { name: 'Greek yogurt', amount: 50, unit: 'g' },
      { name: 'Celery', amount: 40, unit: 'g' },
      { name: 'Red onion', amount: 20, unit: 'g' },
      { name: 'Whole grain crackers', amount: 40, unit: 'g' },
      { name: 'Lemon juice', amount: 10, unit: 'ml' }
    ],
    instructions: [
      'Drain tuna well',
      'Mix with Greek yogurt and lemon juice',
      'Dice celery and red onion',
      'Fold into tuna mixture',
      'Serve with whole grain crackers'
    ],
    tips: [
      'Use Greek yogurt instead of mayo to reduce calories',
      'Add dill for more flavor',
      'Make salad ahead - flavors improve'
    ],
    substitutions: {
      'Tuna': ['salmon', 'chicken', 'chickpeas'],
      'Greek yogurt': ['mayonnaise', 'sour cream'],
      'Crackers': ['whole grain bread', 'rice cakes']
    },
    nutrition: { calories: 280, protein: 32, fat: 6, carbs: 22 }
  },
  {
    id: '18',
    name: 'Millet & Vegetable Porridge',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Creamy millet porridge with sautéed vegetables and herbs',
    servings: 1,
    prepTime: 3,
    cookTime: 20,
    difficulty: 'medium',
    categories: ['savory', 'high-protein'],
    ingredients: [
      { name: 'Millet', amount: 60, unit: 'g' },
      { name: 'Vegetable broth', amount: 250, unit: 'ml' },
      { name: 'Zucchini', amount: 80, unit: 'g' },
      { name: 'Mushrooms', amount: 60, unit: 'g' },
      { name: 'Parmesan cheese', amount: 20, unit: 'g' },
      { name: 'Fresh thyme', amount: 3, unit: 'g' }
    ],
    instructions: [
      'Toast millet in dry pan for 2 minutes',
      'Add vegetable broth and bring to boil',
      'Reduce heat and simmer 15 minutes',
      'Meanwhile, sauté zucchini and mushrooms',
      'Stir vegetables into cooked millet',
      'Top with Parmesan and thyme'
    ],
    tips: [
      'Millet has nutty, mild flavor',
      'Toast before cooking for better texture',
      'Use good quality vegetable broth'
    ],
    substitutions: {
      'Millet': ['quinoa', 'farro', 'barley'],
      'Zucchini': ['spinach', 'asparagus', 'broccoli'],
      'Mushrooms': ['tomatoes', 'bell peppers']
    },
    nutrition: { calories: 310, protein: 12, fat: 8, carbs: 48 }
  },
  {
    id: '19',
    name: 'Berry & Nut Granola Clusters',
    image: 'https://images.unsplash.com/photo-1459156519298-b9f4d7177b8e?w=400&h=300&fit=crop',
    description: 'Homemade granola clusters with dried berries and mixed nuts',
    servings: 6,
    prepTime: 10,
    cookTime: 25,
    difficulty: 'easy',
    categories: ['sweet', 'meal-prep', 'high-protein'],
    ingredients: [
      { name: 'Rolled oats', amount: 200, unit: 'g' },
      { name: 'Mixed nuts', amount: 120, unit: 'g' },
      { name: 'Coconut oil', amount: 60, unit: 'ml' },
      { name: 'Maple syrup', amount: 80, unit: 'g' },
      { name: 'Dried berries', amount: 80, unit: 'g' },
      { name: 'Vanilla extract', amount: 5, unit: 'ml' }
    ],
    instructions: [
      'Preheat oven to 325°F',
      'Mix oats, nuts, coconut oil, maple syrup, and vanilla',
      'Spread on baking sheet',
      'Bake 20-25 minutes, stirring halfway',
      'Cool completely',
      'Stir in dried berries and store in airtight container'
    ],
    tips: [
      'Store in airtight container for 2 weeks',
      'Add berries after cooling to keep them soft',
      'Reduce oil if you prefer less crunchy clusters'
    ],
    substitutions: {
      'Mixed nuts': ['almonds', 'walnuts', 'pecans'],
      'Maple syrup': ['honey', 'coconut sugar'],
      'Dried berries': ['raisins', 'dried cranberries']
    },
    nutrition: { calories: 380, protein: 10, fat: 22, carbs: 40 }
  },
  {
    id: '20',
    name: 'Tofu Scramble with Turmeric',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    description: 'Golden turmeric tofu scramble with vegetables and herbs',
    servings: 1,
    prepTime: 5,
    cookTime: 8,
    difficulty: 'easy',
    categories: ['high-protein', 'savory', 'vegan'],
    ingredients: [
      { name: 'Firm tofu', amount: 200, unit: 'g' },
      { name: 'Turmeric powder', amount: 2, unit: 'g' },
      { name: 'Onion', amount: 40, unit: 'g' },
      { name: 'Bell pepper', amount: 60, unit: 'g' },
      { name: 'Olive oil', amount: 10, unit: 'ml' },
      { name: 'Nutritional yeast', amount: 15, unit: 'g' }
    ],
    instructions: [
      'Press tofu to remove excess moisture',
      'Crumble tofu with hands',
      'Heat olive oil in skillet',
      'Sauté onion and bell pepper until soft',
      'Add crumbled tofu and turmeric',
      'Cook 5 minutes, stirring occasionally',
      'Top with nutritional yeast and serve'
    ],
    tips: [
      'Press tofu well for best texture',
      'Add black salt (kala namak) for eggy flavor',
      'Turmeric adds color and anti-inflammatory benefits'
    ],
    substitutions: {
      'Firm tofu': ['silken tofu', 'chickpeas'],
      'Bell pepper': ['mushrooms', 'spinach', 'tomatoes'],
      'Nutritional yeast': ['feta cheese', 'parmesan']
    },
    nutrition: { calories: 240, protein: 18, fat: 12, carbs: 14 }
  }
];

export const recipesPartTwoExport = recipesPartTwo;
export const allRecipes = [...recipesPartOne, ...recipesPartTwo];
