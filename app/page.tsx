import RecipeCard from '@/components/RecipeCard'
import RecipeFilter from '@/components/RecipeFilter'
import { ChefHat, Sparkles } from 'lucide-react'
import { getSmakslyBlogs, estimateReadTime, type SmakslyBlog } from '@/lib/smaksly-blogs'

export const dynamic = 'force-dynamic'
export const revalidate = 0

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

// Transform SmakslyBlog to Recipe format
function transformBlogToRecipe(blog: SmakslyBlog): Recipe {
  // Extract first paragraph as description
  const description = blog.body
    .replace(/<[^>]*>/g, ' ')
    .split('\n')
    .filter(line => line.trim().length > 0)[0]
    ?.slice(0, 150) || 'Delicious recipe'

  // Determine category from blog category or default
  const category = blog.category?.toLowerCase() || 'dinner'

  // Use read time as cook time
  const cookTime = estimateReadTime(blog.body)

  return {
    id: blog.slug,
    title: blog.title,
    description: description,
    category: category,
    image: blog.image_url || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    cookTime: cookTime,
    difficulty: 'Medium' as Difficulty,
    rating: 4.5,
    servings: 4,
    author: 'Chef'
  }
}

export default async function Home() {
  const smakslyBlogs = await getSmakslyBlogs()
  const recipes = smakslyBlogs.map(transformBlogToRecipe)

  const featuredRecipes = recipes.slice(0, 3)

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
      {featuredRecipes.length > 0 && (
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
      )}

      {/* All Recipes */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-8">All Recipes</h2>

          {recipes.length > 0 ? (
            <RecipeFilter recipes={recipes} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No recipes available yet. Check back soon!</p>
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
