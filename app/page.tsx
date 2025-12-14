'use client'

import { useState } from 'react'
import RecipeCard from '@/components/RecipeCard'
import CategoryFilter from '@/components/CategoryFilter'
import { ChefHat, Sparkles } from 'lucide-react'

type Difficulty = 'Easy' | 'Medium' | 'Hard'

interface Recipe {
  id: string
  title: string
  description: string
  category: string
  image: string
  cookTime: string
  difficulty: Difficulty
  rating: number
  servings: number
  author: string
}

// Sample recipe data
const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Fluffy Buttermilk Pancakes',
    description: 'Start your morning right with these cloud-like pancakes topped with maple syrup and fresh berries.',
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
    cookTime: '20 mins',
    difficulty: 'Easy',
    rating: 4.8,
    servings: 4,
    author: 'Sarah Chen'
  },
  {
    id: '2',
    title: 'Avocado Toast with Poached Egg',
    description: 'Creamy avocado on sourdough topped with a perfectly poached egg and chili flakes.',
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80',
    cookTime: '15 mins',
    difficulty: 'Easy',
    rating: 4.6,
    servings: 2,
    author: 'Jamie Oliver'
  },
  {
    id: '3',
    title: 'Mediterranean Quinoa Bowl',
    description: 'Fresh and healthy bowl loaded with quinoa, chickpeas, cucumber, tomatoes, and tahini dressing.',
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    cookTime: '30 mins',
    difficulty: 'Easy',
    rating: 4.7,
    servings: 2,
    author: 'Maria Garcia'
  },
  {
    id: '4',
    title: 'Grilled Chicken Caesar Salad',
    description: 'Crisp romaine lettuce with grilled chicken, parmesan, croutons, and classic Caesar dressing.',
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80',
    cookTime: '25 mins',
    difficulty: 'Medium',
    rating: 4.5,
    servings: 3,
    author: 'Gordon Ramsay'
  },
  {
    id: '5',
    title: 'Spicy Thai Basil Chicken',
    description: 'Aromatic stir-fry with tender chicken, fresh basil, chilies, and garlic served over jasmine rice.',
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80',
    cookTime: '35 mins',
    difficulty: 'Medium',
    rating: 4.9,
    servings: 4,
    author: 'Pim Techamuanvivit'
  },
  {
    id: '6',
    title: 'Creamy Tuscan Salmon',
    description: 'Pan-seared salmon in a luscious cream sauce with sun-dried tomatoes and spinach.',
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
    cookTime: '40 mins',
    difficulty: 'Medium',
    rating: 4.8,
    servings: 4,
    author: 'Giada De Laurentiis'
  },
  {
    id: '7',
    title: 'Beef Bourguignon',
    description: 'Classic French stew with tender beef braised in red wine with mushrooms and pearl onions.',
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800&q=80',
    cookTime: '2 hrs 30 mins',
    difficulty: 'Hard',
    rating: 4.9,
    servings: 6,
    author: 'Julia Child'
  },
  {
    id: '8',
    title: 'Vegetarian Buddha Bowl',
    description: 'Nourishing bowl with roasted vegetables, quinoa, chickpeas, and creamy tahini sauce.',
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    cookTime: '45 mins',
    difficulty: 'Easy',
    rating: 4.6,
    servings: 2,
    author: 'Yotam Ottolenghi'
  },
  {
    id: '9',
    title: 'Classic Chocolate Chip Cookies',
    description: 'Soft and chewy cookies loaded with chocolate chips. The perfect sweet treat.',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
    cookTime: '25 mins',
    difficulty: 'Easy',
    rating: 4.9,
    servings: 24,
    author: 'Christina Tosi'
  },
  {
    id: '10',
    title: 'Tiramisu',
    description: 'Elegant Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
    cookTime: '30 mins',
    difficulty: 'Medium',
    rating: 4.8,
    servings: 8,
    author: 'Lidia Bastianich'
  },
  {
    id: '11',
    title: 'Lemon Blueberry Cheesecake',
    description: 'Creamy cheesecake with fresh blueberries and a tangy lemon twist on graham cracker crust.',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=80',
    cookTime: '1 hr 30 mins',
    difficulty: 'Hard',
    rating: 4.7,
    servings: 12,
    author: 'Stella Parks'
  },
  {
    id: '12',
    title: 'Molten Chocolate Lava Cake',
    description: 'Individual chocolate cakes with a gooey, flowing center. Serve warm with vanilla ice cream.',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80',
    cookTime: '20 mins',
    difficulty: 'Medium',
    rating: 4.9,
    servings: 4,
    author: 'Jacques Torres'
  }
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredRecipes = selectedCategory === 'all'
    ? recipes
    : recipes.filter(recipe => recipe.category === selectedCategory)

  const featuredRecipes = recipes.filter(recipe => recipe.rating >= 4.8).slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <ChefHat className="w-12 h-12" />
              <h1 className="text-5xl md:text-6xl font-playfair font-bold">
                SAVORY
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-orange-50">
              Discover delicious recipes for every occasion
            </p>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
              From quick weeknight dinners to show-stopping desserts, find inspiration for your next culinary adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-6 h-6 text-orange-500" />
            <h2 className="text-3xl font-playfair font-bold text-gray-900">Featured Recipes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} featured />
            ))}
          </div>
        </div>
      </section>

      {/* All Recipes */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-8">All Recipes</h2>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No recipes found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Ready to Cook Something Amazing?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Join our community of food lovers and never run out of recipe ideas
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
            Get Weekly Recipes
          </button>
        </div>
      </section>
    </div>
  )
}
