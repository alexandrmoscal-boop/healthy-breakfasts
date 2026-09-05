import { Recipe } from './types';

const recipesPartThree: Recipe[] = [
  {
    id: '21',
    name: 'Chia & Coconut Breakfast Bar',
    image: 'https://images.unsplash.com/photo-1600789535608-27ab22cecdc1?w=400&h=300&fit=crop',
    description: 'No-bake bars with chia seeds, coconut, and dark chocolate',
    servings: 4,
    prepTime: 15,
    cookTime: 0,
    difficulty: 'easy',
    categories: ['sweet', 'meal-prep', 'quick'],
    ingredients: [
      { name: 'Chia seeds', amount: 80, unit: 'g' },
      { name: 'Shredded coconut', amount: 100, unit: 'g' },
      { name: 'Almond butter', amount: 80, unit: 'g' },
      { name: 'Coconut oil', amount: 40, unit: 'ml' },
      { name: 'Dark chocolate', amount: 100, unit: 'g' },
      { name: 'Vanilla extract', amount: 5, unit: 'ml' }
    ],
    instructions: [
      'Mix chia, coconut, almond butter, oil, and vanilla',
      'Press into 8x8 baking pan lined with parchment',
      'Melt dark chocolate',
      'Spread chocolate on top',
      'Refrigerate 2 hours',
      'Cut into 12 bars'
    ],
    tips: [
      'Store in refrigerator for up to 1 week',
      'Use parchment paper for easy removal',
      'Freeze for longer storage'
    ],
    substitutions: {
      'Chia seeds': ['flax seeds', 'hemp seeds'],
      'Almond butter': ['cashew butter', 'tahini'],
      'Dark chocolate': ['milk chocolate', 'carob']
    },
    nutrition: { calories: 395, protein: 10, fat: 28, carbs: 32 }
  },
  {
    id: '22',
    name: 'Lentil & Vegetable Soup',
    image: 'https://images.unsplash.com/photo-1547592166-7aae6d027820?w=400&h=300&fit=crop',
    description: 'Hearty red lentil soup with spinach and turmeric',
    servings: 2,
    prepTime: 10,
    cookTime: 25,
    difficulty: 'easy',
    categories: ['high-protein', 'savory', 'low-calorie'],
    ingredients: [
      { name: 'Red lentils', amount: 100, unit: 'g' },
      { name: 'Spinach', amount: 80, unit: 'g' },
      { name: 'Carrots', amount: 80, unit: 'g' },
      { name: 'Vegetable broth', amount: 600, unit: 'ml' },
      { name: 'Turmeric', amount: 2, unit: 'g' },
      { name: 'Olive oil', amount: 10, unit: 'ml' }
    ],
    instructions: [
      'Heat olive oil in pot',
      'Sauté diced carrots for 3 minutes',
      'Add lentils and turmeric',
      'Pour in vegetable broth',
      'Simmer 20 minutes until lentils are tender',
      'Stir in spinach, cook 2 minutes, serve'
    ],
    tips: [
      'Red lentils cook quickly and break down easily',
      'Add lemon juice for brightness',
      'Make double batch for meal prep'
    ],
    substitutions: {
      'Red lentils': ['yellow lentils', 'brown lentils'],
      'Spinach': ['kale', 'chard', 'arugula'],
      'Carrots': ['sweet potato', 'pumpkin']
    },
    nutrition: { calories: 280, protein: 18, fat: 7, carbs: 38 }
  },
  {
    id: '23',
    name: 'Peanut Butter Protein Shake',
    image: 'https://images.unsplash.com/photo-1590080876002-cd94a976b16c?w=400&h=300&fit=crop',
    description: 'Creamy peanut butter shake with banana and oats',
    servings: 1,
    prepTime: 3,
    cookTime: 0,
    difficulty: 'easy',
    categories: ['high-protein', 'sweet', 'quick'],
    ingredients: [
      { name: 'Peanut butter', amount: 30, unit: 'g' },
      { name: 'Banana', amount: 100, unit: 'g' },
      { name: 'Protein powder', amount: 25, unit: 'g' },
      { name: 'Rolled oats', amount: 30, unit: 'g' },
      { name: 'Almond milk', amount: 240, unit: 'ml' },
      { name: 'Ice cubes', amount: 100, unit: 'g' }
    ],
    instructions: [
      'Add all ingredients to blender',
      'Blend until smooth and creamy',
      'Pour into tall glass',
      'Serve immediately with a spoon'
    ],
    tips: [
      'Use frozen banana for thicker shake',
      'Add cocoa powder for chocolate peanut flavor',
      'Prep ingredients in bags night before'
    ],
    substitutions: {
      'Peanut butter': ['almond butter', 'cashew butter'],
      'Protein powder': ['Greek yogurt', 'cottage cheese'],
      'Banana': ['berries', 'apple']
    },
    nutrition: { calories: 385, protein: 26, fat: 14, carbs: 42 }
  },
  {
    id: '24',
    name: 'Breakfast Quesadilla',
    image: 'https://images.unsplash.com/photo-1599866726632-29d6e91e9068?w=400&h=300&fit=crop',
    description: 'Whole wheat tortilla with eggs, black beans, and cheese',
    servings: 1,
    prepTime: 5,
    cookTime: 8,
    difficulty: 'easy',
    categories: ['high-protein', 'savory', 'quick'],
    ingredients: [
      { name: 'Whole wheat tortilla', amount: 100, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'count' },
      { name: 'Black beans', amount: 60, unit: 'g' },
      { name: 'Cheddar cheese', amount: 40, unit: 'g' },
      { name: 'Jalapeño', amount: 10, unit: 'g' },
      { name: 'Olive oil', amount: 5, unit: 'ml' }
    ],
    instructions: [
      'Scramble eggs with salt and pepper',
      'Warm black beans',
      'Place tortilla in skillet',
      'Layer half with beans, eggs, cheese, jalapeño',
      'Fold tortilla in half',
      'Cook until golden on both sides (3-4 min per side)',
      'Cut into triangles and serve'
    ],
    tips: [
      'Use a spatula to flip carefully',
      'Add avocado or guacamole on the side',
      'Make ahead and reheat in microwave'
    ],
    substitutions: {
      'Black beans': ['refried beans', 'pinto beans'],
      'Cheddar': ['Oaxaca', 'Chihuahua', 'mozzarella'],
      'Jalapeño': ['green chiles', 'habanero']
    },
    nutrition: { calories: 420, protein: 18, fat: 18, carbs: 45 }
  },
  {
    id: '25',
    name: 'Matcha Green Tea Smoothie',
    image: 'https://images.unsplash.com/photo-1590080875657-61b96ba14fac?w=400&h=300&fit=crop',
    description: 'Vibrant matcha with banana, spinach, and almond milk',
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    difficulty: 'easy',
    categories: ['low-calorie', 'quick', 'sweet'],
    ingredients: [
      { name: 'Matcha powder', amount: 5, unit: 'g' },
      { name: 'Banana', amount: 80, unit: 'g' },
      { name: 'Spinach', amount: 50, unit: 'g' },
      { name: 'Almond milk', amount: 240, unit: 'ml' },
      { name: 'Honey', amount: 10, unit: 'g' },
      { name: 'Ice cubes', amount: 100, unit: 'g' }
    ],
    instructions: [
      'Whisk matcha with small amount of hot water until frothy',
      'Add matcha mixture to blender',
      'Add banana, spinach, almond milk, honey, and ice',
      'Blend until smooth',
      'Pour into glass and serve'
    ],
    tips: [
      'Use ceremonial grade matcha for best taste',
      'Whisk matcha first to prevent lumps',
      'Use frozen banana for thicker smoothie'
    ],
    substitutions: {
      'Matcha': ['green tea powder', 'spirulina'],
      'Spinach': ['kale', 'lettuce'],
      'Honey': ['maple syrup', 'agave']
    },
    nutrition: { calories: 185, protein: 4, fat: 3, carbs: 38 }
  },
  {
    id: '26',
    name: 'Smoked Salmon Scramble',
    image: 'https://images.unsplash.com/photo-1578949494783-8b8fcc2d3b66?w=400&h=300&fit=crop',
    description: 'Fluffy scrambled eggs with smoked salmon and dill',
    servings: 1,
    prepTime: 3,
    cookTime: 5,
    difficulty: 'easy',
    categories: ['high-protein', 'savory', 'quick'],
    ingredients: [
      { name: 'Eggs', amount: 3, unit: 'count' },
      { name: 'Smoked salmon', amount: 60, unit: 'g' },
      { name: 'Fresh dill', amount: 5, unit: 'g' },
      { name: 'Red onion', amount: 15, unit: 'g' },
      { name: 'Butter', amount: 10, unit: 'g' },
      { name: 'Capers', amount: 10, unit: 'g' }
    ],
    instructions: [
      'Whisk eggs with salt and pepper',
      'Melt butter in nonstick skillet',
      'Pour in eggs and scramble gently',
      'When almost set, fold in salmon and dill',
      'Top with capers and red onion',
      'Serve immediately'
    ],
    tips: [
      'Cook eggs on medium-low heat for creaminess',
      'Don\'t overcook - remove when still slightly wet',
      'Salmon warms gently from residual heat'
    ],
    substitutions: {
      'Smoked salmon': ['lox', 'smoked trout', 'canned salmon'],
      'Fresh dill': ['chives', 'parsley'],
      'Capers': ['pickled onions', 'olives']
    },
    nutrition: { calories: 280, protein: 28, fat: 16, carbs: 3 }
  },
  {
    id: '27',
    name: 'Mango Lassi Parfait',
    image: 'https://images.unsplash.com/photo-1488477181946-6c0ee6461e0d?w=400&h=300&fit=crop',
    description: 'Indian-inspired yogurt parfait with mango and cardamom',
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    difficulty: 'easy',
    categories: ['sweet', 'quick', 'high-protein'],
    ingredients: [
      { name: 'Greek yogurt', amount: 200, unit: 'g' },
      { name: 'Fresh mango', amount: 150, unit: 'g' },
      { name: 'Honey', amount: 15, unit: 'g' },
      { name: 'Cardamom pods', amount: 2, unit: 'count' },
      { name: 'Pistachios', amount: 20, unit: 'g' },
      { name: 'Rose petals', amount: 3, unit: 'g' }
    ],
    instructions: [
      'Crush cardamom pods and extract seeds',
      'Mix Greek yogurt with honey and cardamom',
      'Dice mango into chunks',
      'Layer yogurt mixture and mango in glass',
      'Top with chopped pistachios and rose petals',
      'Serve chilled'
    ],
    tips: [
      'Use ripe but firm mango for best texture',
      'Crush cardamom seeds for stronger flavor',
      'Can be made ahead and refrigerated'
    ],
    substitutions: {
      'Mango': ['pineapple', 'papaya', 'peach'],
      'Pistachios': ['almonds', 'walnuts', 'cashews'],
      'Cardamom': ['cinnamon', 'nutmeg']
    },
    nutrition: { calories: 320, protein: 18, fat: 8, carbs: 42 }
  },
  {
    id: '28',
    name: 'Black Pudding & Tomato Breakfast',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    description: 'British-style breakfast with black pudding, grilled tomatoes, and toast',
    servings: 1,
    prepTime: 5,
    cookTime: 10,
    difficulty: 'easy',
    categories: ['high-protein', 'savory'],
    ingredients: [
      { name: 'Black pudding', amount: 80, unit: 'g' },
      { name: 'Tomatoes', amount: 150, unit: 'g' },
      { name: 'Whole grain bread', amount: 50, unit: 'g' },
      { name: 'Olive oil', amount: 10, unit: 'ml' },
      { name: 'Fresh parsley', amount: 3, unit: 'g' },
      { name: 'Salt and pepper', amount: 3, unit: 'g' }
    ],
    instructions: [
      'Slice black pudding and fry in skillet until crispy',
      'Halve tomatoes and grill cut-side down',
      'Toast bread until golden',
      'Arrange on plate: toast, black pudding, tomatoes',
      'Garnish with fresh parsley',
      'Serve warm'
    ],
    tips: [
      'Black pudding pairs well with grilled vegetables',
      'Don\'t overcook tomatoes - keep them firm',
      'Good source of iron and B vitamins'
    ],
    substitutions: {
      'Black pudding': ['sausage', 'bacon', 'ham'],
      'Tomatoes': ['mushrooms', 'peppers'],
      'Whole grain bread': ['sourdough', 'rye']
    },
    nutrition: { calories: 340, protein: 18, fat: 18, carbs: 28 }
  },
  {
    id: '29',
    name: 'Muesli with Stewed Apples',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Swiss-style muesli with warm spiced stewed apples',
    servings: 1,
    prepTime: 10,
    cookTime: 8,
    difficulty: 'easy',
    categories: ['sweet', 'meal-prep'],
    ingredients: [
      { name: 'Muesli', amount: 50, unit: 'g' },
      { name: 'Apples', amount: 150, unit: 'g' },
      { name: 'Almond milk', amount: 200, unit: 'ml' },
      { name: 'Cinnamon', amount: 2, unit: 'g' },
      { name: 'Walnuts', amount: 25, unit: 'g' },
      { name: 'Honey', amount: 10, unit: 'g' }
    ],
    instructions: [
      'Peel, core, and dice apples',
      'Simmer apples with cinnamon for 5-7 minutes',
      'Soak muesli in almond milk for 2 minutes',
      'Top muesli with stewed apples',
      'Add walnuts and drizzle with honey',
      'Serve warm'
    ],
    tips: [
      'Prep stewed apples ahead for quick mornings',
      'Use Granny Smith apples for tartness',
      'Add ginger for extra warmth'
    ],
    substitutions: {
      'Apples': ['pears', 'plums', 'berries'],
      'Muesli': ['granola', 'oats'],
      'Walnuts': ['almonds', 'pecans', 'hazelnuts']
    },
    nutrition: { calories: 355, protein: 10, fat: 12, carbs: 52 }
  },
  {
    id: '30',
    name: 'Buckwheat & Berry Power Bowl',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop',
    description: 'Toasted buckwheat groats with berries, seeds, and almond butter',
    servings: 1,
    prepTime: 5,
    cookTime: 12,
    difficulty: 'easy',
    categories: ['high-protein', 'sweet', 'low-calorie'],
    ingredients: [
      { name: 'Buckwheat groats', amount: 60, unit: 'g' },
      { name: 'Almond milk', amount: 200, unit: 'ml' },
      { name: 'Mixed berries', amount: 100, unit: 'g' },
      { name: 'Almond butter', amount: 20, unit: 'g' },
      { name: 'Pumpkin seeds', amount: 20, unit: 'g' },
      { name: 'Cinnamon', amount: 2, unit: 'g' }
    ],
    instructions: [
      'Toast buckwheat groats in dry skillet for 2 minutes',
      'Add almond milk and cinnamon',
      'Simmer 10 minutes until groats are tender',
      'Transfer to bowl',
      'Top with berries, almond butter drizzle, and pumpkin seeds',
      'Serve immediately'
    ],
    tips: [
      'Buckwheat is gluten-free and nutty-flavored',
      'Toast before cooking for better texture',
      'Mix berries into warm bowl for juicy texture'
    ],
    substitutions: {
      'Buckwheat': ['millet', 'quinoa', 'amaranth'],
      'Mixed berries': ['stone fruits', 'melon'],
      'Pumpkin seeds': ['sunflower seeds', 'hemp seeds']
    },
    nutrition: { calories: 375, protein: 14, fat: 15, carbs: 46 }
  }
];

export const allRecipes30 = recipesPartThree;
export default recipesPartThree;
