'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import RecipeForm from '@/components/RecipeForm'

export default function EditRecipePage() {
  const params = useParams()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`/api/recipes/${params.id}`)
        const data = await response.json()
        if (data.success) {
          setRecipe(data.data)
        } else {
          setError('Recipe not found')
        }
      } catch (err) {
        setError('Failed to load recipe')
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchRecipe()
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading recipe...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <RecipeForm initialData={recipe} isEdit />
    </div>
  )
}
