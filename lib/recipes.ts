import { Recipe } from './types';

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Protein-Packed Oatmeal Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Creamy oatmeal topped with protein powder, berries, and almonds for a complete breakfast',
    servings: 1,
    prepTime: 2,
    cookTime: 5,
    difficulty: 'easy',
    categories: ['high-protein', 'quick'],
    ingredients: [
      { name: 'Rolled oats', amount: 50, unit: 'g' },
      { name: 'Protein powder (vanilla)', amount: 25, unit: 'g' },
      { name: 'Almond milk', amount: 200, unit: 'ml' },
      { name: 'Blueberries', amount: 80, unit: 'g' },
      { name: 'Almonds', amount: 25, unit: 'g' },
      { name: 'Honey', amount: 10, unit: 'g' }
    ],
    instructions: [
      'Cook oats with almond milk according to package directions',
      'Stir in protein powder until fully combined',
      'Top with fresh blueberries and sliced almonds',
      'Drizzle with honey and serve immediately'
    ],
    tips: [
      'Use vanilla protein powder for best flavor',
      'Add protein powder after cooking to preserve nutrients',
      'Make ahead and reheat with extra milk in the morning'
    ],
    substitutions: {
      'Blueberries': ['raspberries', 'strawberries', 'blackberries'],
      'Almonds': ['walnuts', 'pecans', 'cashews'],
      'Protein powder': ['Greek yogurt (50g)', 'cottage cheese (100g)']
    },
    nutrition: { calories: 385, protein: 28, fat: 12, carbs: 42 }
  },
  {
    id: '2',
    name: 'Greek Yogurt Parfait',
    image: 'https://images.unsplash.com/photo-1488477181946-6c0ee6461e0d?w=400&h=300&fit=crop',
    description: 'Layers of Greek yogurt, granola, and fresh berries with honey drizzle',
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    difficulty: 'easy',
    categories: ['high-protein', 'quick', 'low-calorie'],
    ingredients: [
      { name: 'Greek yogurt', amount: 200, unit: 'g' },
      { name: 'Granola', amount: 40, unit: 'g' },
      { name: 'Mixed berries', amount: 100, unit: 'g' },
      { name: 'Honey', amount: 15, unit: 'g' },
      { name: 'Chia seeds', amount: 10, unit: 'g' }
    ],
    instructions: [
      'Layer half of Greek yogurt in a bowl or glass',
      'Add half of berries',
      'Layer remaining yogurt',
      'Top with granola and remaining berries',
      'Drizzle with honey and sprinkle chia seeds'
    ],
    tips: [
      'Use full-fat Greek yogurt for creamier texture',
      'Add granola just before serving to keep it crispy',
      'Prepare components night before for quick assembly'
    ],
    substitutions: {
      'Mixed berries': ['individual berries', 'sliced peaches', 'diced mango'],
      'Granola': ['muesli', 'nuts and seeds mix', 'crushed almonds'],
      'Honey': ['maple syrup', 'agave nectar']
    },
    nutrition: { calories: 320, protein: 20, fat: 8, carbs: 38 }
  },
  {
    id: '3',
    name: 'Veggie-Packed Egg White Omelet',
    image: 'https://images.unsplash.com/photo-1585238341710-4b9fcb8e90b5?w=400&h=300&fit=crop',
    description: 'Fluffy egg white omelet loaded with spinach, tomatoes, and mushrooms',
    servings: 1,
    prepTime: 3,
    cookTime: 8,
    difficulty: 'medium',
    categories: ['high-protein', 'low-calorie', 'savory'],
    ingredients: [
      { name: 'Egg whites', amount: 4, unit: 'count' },
      { name: 'Fresh spinach', amount: 50, unit: 'g' },
      { name: 'Cherry tomatoes', amount: 60, unit: 'g' },
      { name: 'Mushrooms', amount: 60, unit: 'g' },
      { name: 'Olive oil', amount: 5, unit: 'ml' },
      { name: 'Salt and pepper', amount: 3, unit: 'g' }
    ],
    instructions: [
      'Beat egg whites with salt and pepper',
      'Heat olive oil in a non-stick pan',
      'Add mushrooms and sauté for 2 minutes',
      'Add spinach and tomatoes, cook until wilted',
      'Pour egg whites over vegetables',
      'Cook until set, about 5 minutes, then fold and serve'
    ],
    tips: [
      'Use a non-stick pan for best results',
      'Don\'t flip - slide onto plate and fold',
      'Prep vegetables night before for quick morning cooking'
    ],
    substitutions: {
      'Spinach': ['kale', 'arugula', 'bok choy'],
      'Mushrooms': ['zucchini', 'bell peppers', 'onions'],
      'Cherry tomatoes': ['sun-dried tomatoes', 'regular tomatoes']
    },
    nutrition: { calories: 145, protein: 20, fat: 6, carbs: 8 }
  },
  {
    id: '4',
    name: 'Chia Seed Pudding',
    image: 'https://images.unsplash.com/photo-1590080876002-cd94a976b16c?w=400&h=300&fit=crop',
    description: 'Creamy overnight chia pudding with coconut milk and fresh fruit',
    servings: 1,
    prepTime: 10,
    cookTime: 0,
    difficulty: 'easy',
    categories: ['quick', 'meal-prep', 'low-calorie'],
    ingredients: [
      { name: 'Chia seeds', amount: 30, unit: 'g' },
      { name: 'Coconut milk', amount: 200, unit: 'ml' },
      { name: 'Vanilla extract', amount: 2, unit: 'ml' },
      { name: 'Maple syrup', amount: 10, unit: 'g' },
      { name: 'Fresh mango', amount: 100, unit: 'g' },
      { name: 'Coconut flakes', amount: 10, unit: 'g' }
    ],
    instructions: [
      'Mix chia seeds with coconut milk, vanilla, and maple syrup',
      'Stir well to prevent clumping',
      'Cover and refrigerate for at least 4 hours or overnight',
      'Stir before serving and add more milk if needed',
      'Top with fresh mango and coconut flakes'
    ],
    tips: [
      'Make up to 3 days in advance',
      'Use canned coconut milk for best consistency',
      'Add more milk in morning if too thick'
    ],
    substitutions: {
      'Coconut milk': ['almond milk', 'oat milk', 'regular milk'],
      'Mango': ['berries', 'kiwi', 'pineapple'],
      'Maple syrup': ['honey', 'agave']
    },
    nutrition: { calories: 310, protein: 8, fat: 18, carbs: 28 }
  },
  {
    id: '5',
    name: 'Quinoa Breakfast Bowl',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop',
    description: 'Nutty quinoa base with almond butter, banana, and cinnamon',
    servings: 1,
    prepTime: 2,
    cookTime: 15,
    difficulty: 'easy',
    categories: ['high-protein', 'sweet'],
    ingredients: [
      { name: 'Quinoa', amount: 60, unit: 'g' },
      { name: 'Almond milk', amount: 200, unit: 'ml' },
      { name: 'Almond butter', amount: 20, unit: 'g' },
      { name: 'Banana', amount: 80, unit: 'g' },
      { name: 'Cinnamon', amount: 2, unit: 'g' },
      { name: 'Maple syrup', amount: 10, unit: 'g' }
    ],
    instructions: [
      'Rinse quinoa thoroughly',
      'Cook with almond milk and cinnamon for 12-15 minutes',
      'Fluff with fork',
      'Stir in almond butter',
      'Top with sliced banana and drizzle with maple syrup'
    ],
    tips: [
      'Cook extra quinoa and refrigerate for quick breakfasts',
      'Toast quinoa before cooking for nuttier flavor',
      'Use smooth or chunky almond butter based on preference'
    ],
    substitutions: {
      'Almond butter': ['peanut butter', 'tahini', 'coconut butter'],
      'Banana': ['berries', 'sliced apple', 'dates'],
      'Quinoa': ['millet', 'amaranth']
    },
    nutrition: { calories: 380, protein: 14, fat: 14, carbs: 52 }
  },
  {
    id: '6',
    name: 'Smoked Salmon & Cream Cheese Bagel',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop',
    description: 'Whole grain bagel with cream cheese, smoked salmon, capers, and red onion',
    servings: 1,
    prepTime: 5,
    cookTime: 2,
    difficulty: 'easy',
    categories: ['high-protein', 'savory', 'quick'],
    ingredients: [
      { name: 'Whole grain bagel', amount: 85, unit: 'g' },
      { name: 'Cream cheese', amount: 30, unit: 'g' },
      { name: 'Smoked salmon', amount: 50, unit: 'g' },
      { name: 'Capers', amount: 10, unit: 'g' },
      { name: 'Red onion', amount: 15, unit: 'g' },
      { name: 'Dill', amount: 2, unit: 'g' }
    ],
    instructions: [
      'Toast bagel until golden',
      'Spread cream cheese on both halves',
      'Layer smoked salmon',
      'Add thin slices of red onion',
      'Top with capers and fresh dill',
      'Serve immediately'
    ],
    tips: [
      'Use lox for richer flavor',
      'Thin red onion slices reduce sharp taste',
      'Add cucumber and tomato for extra crunch'
    ],
    substitutions: {
      'Smoked salmon': ['smoked trout', 'canned tuna', 'turkey breast'],
      'Cream cheese': ['Greek yogurt', 'ricotta', 'goat cheese'],
      'Bagel': ['English muffin', 'toast', 'rice cakes']
    },
    nutrition: { calories: 340, protein: 22, fat: 11, carbs: 38 }
  },
  {
    id: '7',
    name: 'Spinach & Feta Scramble',
    image: 'https://images.unsplash.com/photo-1578949494783-8b8fcc2d3b66?w=400&h=300&fit=crop',
    description: 'Scrambled eggs with fresh spinach, crumbled feta, and sun-dried tomatoes',
    servings: 1,
    prepTime: 3,
    cookTime: 5,
    difficulty: 'easy',
    categories: ['high-protein', 'savory', 'quick'],
    ingredients: [
      { name: 'Eggs', amount: 2, unit: 'count' },
      { name: 'Fresh spinach', amount: 80, unit: 'g' },
      { name: 'Feta cheese', amount: 30, unit: 'g' },
      { name: 'Sun-dried tomatoes', amount: 20, unit: 'g' },
      { name: 'Olive oil', amount: 5, unit: 'ml' },
      { name: 'Salt and pepper', amount: 3, unit: 'g' }
    ],
    instructions: [
      'Heat olive oil in a skillet',
      'Add spinach and cook until wilted',
      'Whisk eggs with salt and pepper',
      'Pour into skillet with spinach',
      'Scramble gently until cooked through',
      'Top with crumbled feta and sun-dried tomatoes'
    ],
    tips: [
      'Keep heat moderate to avoid rubbery eggs',
      'Don\'t overstir - let curds form',
      'Add tomatoes at the end to maintain their flavor'
    ],
    substitutions: {
      'Spinach': ['kale', 'arugula', 'chard'],
      'Feta': ['goat cheese', 'ricotta', 'mozzarella'],
      'Sun-dried tomatoes': ['fresh tomatoes', 'roasted red peppers']
    },
    nutrition: { calories: 240, protein: 16, fat: 16, carbs: 6 }
  },
  {
    id: '8',
    name: 'Smoothie Bowl Supreme',
    image: 'https://images.unsplash.com/photo-1590080876002-cd94a976b16c?w=400&h=300&fit=crop',
    description: 'Thick acai smoothie base topped with granola, fresh fruit, and coconut',
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    difficulty: 'easy',
    categories: ['sweet', 'quick', 'low-calorie'],
    ingredients: [
      { name: 'Acai puree', amount: 100, unit: 'g' },
      { name: 'Banana', amount: 80, unit: 'g' },
      { name: 'Almond milk', amount: 150, unit: 'ml' },
      { name: 'Granola', amount: 40, unit: 'g' },
      { name: 'Strawberries', amount: 60, unit: 'g' },
      { name: 'Coconut flakes', amount: 15, unit: 'g' }
    ],
    instructions: [
      'Blend acai, banana, and almond milk until thick',
      'Pour into a bowl',
      'Arrange granola, strawberries, and coconut on top',
      'Serve immediately with spoon'
    ],
    tips: [
      'Use frozen banana for thicker consistency',
      'Add toppings just before eating to keep granola crispy',
      'Don\'t add too much milk - texture should be thick'
    ],
    substitutions: {
      'Acai': ['blueberries', 'raspberry', 'dragon fruit'],
      'Almond milk': ['coconut milk', 'regular milk'],
      'Granola': ['muesli', 'nuts and seeds']
    },
    nutrition: { calories: 355, protein: 8, fat: 10, carbs: 56 }
  },
  {
    id: '9',
    name: 'Cottage Cheese & Berries',
    image: 'https://images.unsplash.com/photo-1590920591404-d11d61ef1b69?w=400&h=300&fit=crop',
    description: 'Creamy cottage cheese with fresh berries, granola, and honey',
    servings: 1,
    prepTime: 3,
    cookTime: 0,
    difficulty: 'easy',
    categories: ['high-protein', 'quick', 'low-calorie'],
    ingredients: [
      { name: 'Cottage cheese', amount: 200, unit: 'g' },
      { name: 'Mixed berries', amount: 120, unit: 'g' },
      { name: 'Granola', amount: 35, unit: 'g' },
      { name: 'Honey', amount: 10, unit: 'g' },
      { name: 'Vanilla extract', amount: 2, unit: 'ml' }
    ],
    instructions: [
      'Place cottage cheese in a bowl',
      'Stir in vanilla extract',
      'Top with fresh berries',
      'Sprinkle granola over top',
      'Drizzle with honey and serve'
    ],
    tips: [
      'Use full-fat cottage cheese for creamier texture',
      'Add granola right before serving',
      'Mix cottage cheese with a little yogurt for smoother texture'
    ],
    substitutions: {
      'Cottage cheese': ['ricotta', 'Greek yogurt', 'mascarpone'],
      'Mixed berries': ['individual berries', 'canned berries'],
      'Granola': ['muesli', 'cereal']
    },
    nutrition: { calories: 310, protein: 28, fat: 6, carbs: 32 }
  },
  {
    id: '10',
    name: 'Avocado Toast with Poached Egg',
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc8978?w=400&h=300&fit=crop',
    description: 'Whole grain toast topped with mashed avocado and a perfectly poached egg',
    servings: 1,
    prepTime: 5,
    cookTime: 5,
    difficulty: 'medium',
    categories: ['high-protein', 'savory', 'quick'],
    ingredients: [
      { name: 'Whole grain bread', amount: 50, unit: 'g' },
      { name: 'Avocado', amount: 100, unit: 'g' },
      { name: 'Egg', amount: 1, unit: 'count' },
      { name: 'Lemon juice', amount: 10, unit: 'ml' },
      { name: 'Red pepper flakes', amount: 1, unit: 'g' },
      { name: 'Sea salt', amount: 2, unit: 'g' }
    ],
    instructions: [
      'Toast bread until golden',
      'Halve avocado and scoop flesh into bowl',
      'Mash with lemon juice, salt, and red pepper flakes',
      'Spread on toast',
      'Bring water to gentle simmer, poach egg',
      'Place egg on top and serve immediately'
    ],
    tips: [
      'Use ripe but not overripe avocado',
      'Add vinegar to water for poaching eggs',
      'Use a whirlpool technique for poaching'
    ],
    substitutions: {
      'Avocado': ['hummus', 'mashed beans', 'ricotta'],
      'Whole grain bread': ['sourdough', 'rye bread'],
      'Poached egg': ['fried egg', 'scrambled egg']
    },
    nutrition: { calories: 310, protein: 14, fat: 18, carbs: 24 }
  }
];
