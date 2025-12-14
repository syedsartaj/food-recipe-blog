'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, Search, ChefHat, Eye } from 'lucide-react'

interface Recipe {
  _id: string
  title: string
  description: string
  category: string
  image: string
  cookTime: string
  difficulty: string
  rating: number
  createdAt: string
}

export default function AdminDashboard() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [deleteId, setDeleteId] = useState<string | null>(null)

  useEffect(() => {
    fetchRecipes()
  }, [])

  const fetchRecipes = async () => {
    try {
      const response = await fetch('/api/recipes')
      const data = await response.json()
      if (data.success) {
        setRecipes(data.data)
      }
    } catch (error) {
      console.error('Error fetching recipes:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this recipe?')) return

    try {
      const response = await fetch(`/api/recipes/${id}`, {
        method: 'DELETE'
      })
      const data = await response.json()
      if (data.success) {
        setRecipes(recipes.filter(r => r._id !== id))
      }
    } catch (error) {
      console.error('Error deleting recipe:', error)
    }
  }

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const stats = {
    total: recipes.length,
    breakfast: recipes.filter(r => r.category === 'breakfast').length,
    lunch: recipes.filter(r => r.category === 'lunch').length,
    dinner: recipes.filter(r => r.category === 'dinner').length,
    desserts: recipes.filter(r => r.category === 'desserts').length
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ChefHat className="w-8 h-8 text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-900">Recipe Admin</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Site
              </Link>
              <Link
                href="/admin/recipes/new"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Recipe
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-500">Total Recipes</p>
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-500">Breakfast</p>
            <p className="text-2xl font-bold text-orange-500">{stats.breakfast}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-500">Lunch</p>
            <p className="text-2xl font-bold text-green-500">{stats.lunch}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-500">Dinner</p>
            <p className="text-2xl font-bold text-blue-500">{stats.dinner}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-500">Desserts</p>
            <p className="text-2xl font-bold text-pink-500">{stats.desserts}</p>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          {/* Recipe Table */}
          {loading ? (
            <div className="p-8 text-center text-gray-500">Loading recipes...</div>
          ) : filteredRecipes.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500 mb-4">No recipes found</p>
              <Link
                href="/admin/recipes/new"
                className="text-orange-500 hover:text-orange-600"
              >
                Create your first recipe
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Recipe
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Difficulty
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRecipes.map((recipe) => (
                    <tr key={recipe._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {recipe.title}
                            </div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">
                              {recipe.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          recipe.category === 'breakfast' ? 'bg-orange-100 text-orange-800' :
                          recipe.category === 'lunch' ? 'bg-green-100 text-green-800' :
                          recipe.category === 'dinner' ? 'bg-blue-100 text-blue-800' :
                          'bg-pink-100 text-pink-800'
                        }`}>
                          {recipe.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {recipe.difficulty}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {recipe.rating}/5
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(recipe.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          href={`/admin/recipes/${recipe._id}`}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          <Edit className="w-4 h-4 inline" />
                        </Link>
                        <button
                          onClick={() => handleDelete(recipe._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-4 h-4 inline" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
