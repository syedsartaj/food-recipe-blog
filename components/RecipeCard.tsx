import { Clock, Users, Star, TrendingUp } from 'lucide-react'

interface Recipe {
  id: string
  title: string
  description: string
  category: string
  image: string
  cookTime: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  rating: number
  servings: number
  author: string
}

interface RecipeCardProps {
  recipe: Recipe
  featured?: boolean
}

export default function RecipeCard({ recipe, featured = false }: RecipeCardProps) {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  }

  const categoryColors = {
    breakfast: 'category-badge-breakfast',
    lunch: 'category-badge-lunch',
    dinner: 'category-badge-dinner',
    desserts: 'category-badge-desserts'
  }

  return (
    <article className={`recipe-card ${featured ? 'ring-2 ring-orange-500' : ''}`}>
      {/* Image */}
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-card-image"
        />
        {featured && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            Featured
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className={`category-badge ${categoryColors[recipe.category as keyof typeof categoryColors]}`}>
            {recipe.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="recipe-card-content">
        <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
          {recipe.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>

        {/* Author */}
        <p className="text-sm text-gray-500 mb-3">
          by <span className="text-orange-600 font-medium">{recipe.author}</span>
        </p>

        {/* Meta Information */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>

        {/* Rating & Difficulty */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold text-gray-900">{recipe.rating}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[recipe.difficulty]}`}>
            {recipe.difficulty}
          </span>
        </div>

        {/* CTA Button */}
        <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
          View Recipe
        </button>
      </div>
    </article>
  )
}
