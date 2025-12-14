'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Save, ArrowLeft, Plus, X } from 'lucide-react'
import Link from 'next/link'

interface RecipeFormData {
  title: string
  description: string
  category: 'breakfast' | 'lunch' | 'dinner' | 'desserts'
  image: string
  ingredients: string[]
  instructions: string[]
  cookTime: string
  prepTime: string
  totalTime: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  servings: number
  rating: number
  author: { name: string; avatar?: string }
  tags: string[]
  nutrition?: {
    calories: number
    protein: string
    carbs: string
    fat: string
  }
}

interface RecipeFormProps {
  initialData?: RecipeFormData & { _id?: string }
  isEdit?: boolean
}

const defaultFormData: RecipeFormData = {
  title: '',
  description: '',
  category: 'dinner',
  image: '',
  ingredients: [''],
  instructions: [''],
  cookTime: '',
  prepTime: '',
  totalTime: '',
  difficulty: 'Easy',
  servings: 4,
  rating: 0,
  author: { name: '' },
  tags: [],
  nutrition: {
    calories: 0,
    protein: '',
    carbs: '',
    fat: ''
  }
}

export default function RecipeForm({ initialData, isEdit = false }: RecipeFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<RecipeFormData>(initialData || defaultFormData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [tagInput, setTagInput] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      author: { ...prev.author, name: e.target.value }
    }))
  }

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...formData.ingredients]
    newIngredients[index] = value
    setFormData(prev => ({ ...prev, ingredients: newIngredients }))
  }

  const addIngredient = () => {
    setFormData(prev => ({ ...prev, ingredients: [...prev.ingredients, ''] }))
  }

  const removeIngredient = (index: number) => {
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }))
  }

  const handleInstructionChange = (index: number, value: string) => {
    const newInstructions = [...formData.instructions]
    newInstructions[index] = value
    setFormData(prev => ({ ...prev, instructions: newInstructions }))
  }

  const addInstruction = () => {
    setFormData(prev => ({ ...prev, instructions: [...prev.instructions, ''] }))
  }

  const removeInstruction = (index: number) => {
    setFormData(prev => ({
      ...prev,
      instructions: prev.instructions.filter((_, i) => i !== index)
    }))
  }

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }))
      setTagInput('')
    }
  }

  const removeTag = (tag: string) => {
    setFormData(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }))
  }

  const handleNutritionChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      nutrition: {
        ...prev.nutrition!,
        [field]: field === 'calories' ? parseInt(value) || 0 : value
      }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const url = isEdit && initialData?._id
        ? `/api/recipes/${initialData._id}`
        : '/api/recipes'

      const method = isEdit ? 'PUT' : 'POST'

      // Filter out empty ingredients and instructions
      const submitData = {
        ...formData,
        ingredients: formData.ingredients.filter(i => i.trim()),
        instructions: formData.instructions.filter(i => i.trim()),
        servings: Number(formData.servings)
      }

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      })

      const data = await response.json()

      if (data.success) {
        router.push('/admin')
        router.refresh()
      } else {
        setError(data.error || 'Failed to save recipe')
      }
    } catch (err) {
      setError('An error occurred while saving the recipe')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEdit ? 'Edit Recipe' : 'New Recipe'}
          </h1>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {loading ? 'Saving...' : 'Save Recipe'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <div className="space-y-8">
        {/* Basic Info */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Delicious Pasta Recipe"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="A short description of your recipe..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="desserts">Desserts</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Difficulty *
              </label>
              <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL *
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author Name
              </label>
              <input
                type="text"
                value={formData.author.name}
                onChange={handleAuthorChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Chef John"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Servings *
              </label>
              <input
                type="number"
                name="servings"
                value={formData.servings}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Time */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Cooking Time</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Prep Time *
              </label>
              <input
                type="text"
                name="prepTime"
                value={formData.prepTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="15 mins"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cook Time *
              </label>
              <input
                type="text"
                name="cookTime"
                value={formData.cookTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="30 mins"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Time *
              </label>
              <input
                type="text"
                name="totalTime"
                value={formData.totalTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="45 mins"
              />
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Ingredients</h2>
          <div className="space-y-3">
            {formData.ingredients.map((ingredient, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder={`Ingredient ${index + 1}`}
                />
                {formData.ingredients.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeIngredient(index)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addIngredient}
              className="flex items-center gap-2 text-orange-500 hover:text-orange-600"
            >
              <Plus className="w-4 h-4" />
              Add Ingredient
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Instructions</h2>
          <div className="space-y-3">
            {formData.instructions.map((instruction, index) => (
              <div key={index} className="flex gap-2">
                <span className="flex items-center justify-center w-8 h-10 bg-orange-100 text-orange-600 font-semibold rounded-lg">
                  {index + 1}
                </span>
                <textarea
                  value={instruction}
                  onChange={(e) => handleInstructionChange(index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder={`Step ${index + 1}`}
                  rows={2}
                />
                {formData.instructions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeInstruction(index)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg self-start"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addInstruction}
              className="flex items-center gap-2 text-orange-500 hover:text-orange-600"
            >
              <Plus className="w-4 h-4" />
              Add Step
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {formData.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full flex items-center gap-1"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="hover:text-orange-900"
                >
                  <X className="w-4 h-4" />
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Add a tag..."
            />
            <button
              type="button"
              onClick={addTag}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              Add
            </button>
          </div>
        </div>

        {/* Nutrition */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Nutrition Info (Optional)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Calories
              </label>
              <input
                type="number"
                value={formData.nutrition?.calories || ''}
                onChange={(e) => handleNutritionChange('calories', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="350"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Protein
              </label>
              <input
                type="text"
                value={formData.nutrition?.protein || ''}
                onChange={(e) => handleNutritionChange('protein', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="25g"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Carbs
              </label>
              <input
                type="text"
                value={formData.nutrition?.carbs || ''}
                onChange={(e) => handleNutritionChange('carbs', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="40g"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fat
              </label>
              <input
                type="text"
                value={formData.nutrition?.fat || ''}
                onChange={(e) => handleNutritionChange('fat', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="12g"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
