import { NextRequest, NextResponse } from 'next/server'
import { getRecipeById, updateRecipe, deleteRecipe } from '@/lib/db'

// GET single recipe by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const recipe = await getRecipeById(params.id)

    if (!recipe) {
      return NextResponse.json(
        { success: false, error: 'Recipe not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, data: recipe })
  } catch (error) {
    console.error('Error fetching recipe:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch recipe' },
      { status: 500 }
    )
  }
}

// PUT update recipe
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()

    // Check if recipe exists
    const existingRecipe = await getRecipeById(params.id)
    if (!existingRecipe) {
      return NextResponse.json(
        { success: false, error: 'Recipe not found' },
        { status: 404 }
      )
    }

    const result = await updateRecipe(params.id, body)

    return NextResponse.json({
      success: true,
      data: { modifiedCount: result.modifiedCount }
    })
  } catch (error) {
    console.error('Error updating recipe:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update recipe' },
      { status: 500 }
    )
  }
}

// DELETE recipe
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const existingRecipe = await getRecipeById(params.id)
    if (!existingRecipe) {
      return NextResponse.json(
        { success: false, error: 'Recipe not found' },
        { status: 404 }
      )
    }

    const result = await deleteRecipe(params.id)

    return NextResponse.json({
      success: true,
      data: { deletedCount: result.deletedCount }
    })
  } catch (error) {
    console.error('Error deleting recipe:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete recipe' },
      { status: 500 }
    )
  }
}
