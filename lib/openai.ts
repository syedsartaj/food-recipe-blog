import OpenAI from 'openai'

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Please add your OPENAI_API_KEY to .env.local')
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// Generate a recipe using AI
export async function generateRecipe(prompt: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a professional chef and recipe developer. Create detailed, delicious recipes with clear instructions.
          Format your response as a JSON object with the following structure:
          {
            "title": "Recipe Name",
            "description": "Brief description",
            "category": "breakfast/lunch/dinner/desserts",
            "ingredients": ["ingredient 1", "ingredient 2"],
            "instructions": ["step 1", "step 2"],
            "cookTime": "30 mins",
            "prepTime": "15 mins",
            "totalTime": "45 mins",
            "difficulty": "Easy/Medium/Hard",
            "servings": 4,
            "tags": ["tag1", "tag2"],
            "nutrition": {
              "calories": 350,
              "protein": "25g",
              "carbs": "40g",
              "fat": "12g"
            }
          }`
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.8,
      max_tokens: 2000
    })

    const response = completion.choices[0]?.message?.content
    if (!response) {
      throw new Error('No response from OpenAI')
    }

    const recipe = JSON.parse(response)
    return recipe
  } catch (error) {
    console.error('Error generating recipe:', error)
    throw error
  }
}

// Suggest recipe variations
export async function suggestRecipeVariations(recipeTitle: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a creative chef who suggests recipe variations. Provide 3-5 creative variations of the given recipe."
        },
        {
          role: "user",
          content: `Suggest variations for: ${recipeTitle}`
        }
      ],
      temperature: 0.9,
      max_tokens: 500
    })

    return completion.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Error suggesting variations:', error)
    throw error
  }
}

// Generate recipe from ingredients
export async function generateRecipeFromIngredients(ingredients: string[]) {
  try {
    const ingredientList = ingredients.join(', ')
    const prompt = `Create a delicious recipe using these ingredients: ${ingredientList}. Be creative and make it appetizing!`

    return await generateRecipe(prompt)
  } catch (error) {
    console.error('Error generating recipe from ingredients:', error)
    throw error
  }
}

// Get cooking tips and techniques
export async function getCookingTips(topic: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a culinary expert providing helpful cooking tips and techniques. Be concise and practical."
        },
        {
          role: "user",
          content: `Give me tips about: ${topic}`
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    })

    return completion.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Error getting cooking tips:', error)
    throw error
  }
}

// Suggest wine or beverage pairing
export async function suggestPairing(dishName: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a sommelier and beverage expert. Suggest perfect drink pairings for dishes."
        },
        {
          role: "user",
          content: `What beverages would pair well with: ${dishName}?`
        }
      ],
      temperature: 0.7,
      max_tokens: 300
    })

    return completion.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Error suggesting pairing:', error)
    throw error
  }
}

// Generate meal plan
export async function generateMealPlan(preferences: {
  days: number
  dietaryRestrictions?: string[]
  cuisine?: string
}) {
  try {
    const { days, dietaryRestrictions = [], cuisine = 'any' } = preferences
    const restrictions = dietaryRestrictions.length > 0
      ? `Dietary restrictions: ${dietaryRestrictions.join(', ')}.`
      : ''

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a meal planning expert. Create balanced, delicious meal plans.
          Format your response as a JSON array of meals for each day.`
        },
        {
          role: "user",
          content: `Create a ${days}-day meal plan. ${restrictions} Preferred cuisine: ${cuisine}.`
        }
      ],
      temperature: 0.8,
      max_tokens: 2000
    })

    return completion.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Error generating meal plan:', error)
    throw error
  }
}

export default openai
