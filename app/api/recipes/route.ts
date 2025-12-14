import { NextRequest, NextResponse } from 'next/server'
import { getRecipes, createRecipe, searchRecipes } from '@/lib/db'

// GET all recipes or search
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    const category = searchParams.get('category')

    let recipes
    if (query) {
      recipes = await searchRecipes(query)
    } else if (category) {
      recipes = await getRecipes({ category: category as any })
    } else {
      recipes = await getRecipes()
    }

    return NextResponse.json({ success: true, data: recipes })
  } catch (error) {
    console.error('Error fetching recipes:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch recipes' },
      { status: 500 }
    )
  }
}

// POST create new recipe
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ['title', 'description', 'category', 'image', 'ingredients', 'instructions', 'cookTime', 'prepTime', 'totalTime', 'difficulty', 'servings']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    const recipe = {
      title: body.title,
      description: body.description,
      category: body.category,
      image: body.image,
      ingredients: body.ingredients,
      instructions: body.instructions,
      cookTime: body.cookTime,
      prepTime: body.prepTime,
      totalTime: body.totalTime,
      difficulty: body.difficulty,
      servings: body.servings,
      rating: body.rating || 0,
      ratingCount: body.ratingCount || 0,
      author: body.author || { name: 'Anonymous' },
      tags: body.tags || [],
      nutrition: body.nutrition
    }

    const result = await createRecipe(recipe)

    return NextResponse.json(
      { success: true, data: { insertedId: result.insertedId } },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating recipe:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create recipe' },
      { status: 500 }
    )
  }
}
