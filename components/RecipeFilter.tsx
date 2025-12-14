'use client'

import { useState } from 'react'
import RecipeCard from './RecipeCard'
import CategoryFilter from './CategoryFilter'

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

interface RecipeFilterProps {
  recipes: Recipe[]
}

export default function RecipeFilter({ recipes }: RecipeFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredRecipes = selectedCategory === 'all'
    ? recipes
    : recipes.filter(recipe => recipe.category === selectedCategory)

  return (
    <>
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
    </>
  )
}
