import { MongoClient, Db, ObjectId } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MONGODB_URI to .env.local')
}

const uri = process.env.MONGODB_URI
const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the client across module reloads
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  // In production mode, create a new client
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export async function getDatabase(): Promise<Db> {
  const client = await clientPromise
  return client.db('food_recipe_blog')
}

// Recipe Schema Interface
export interface Recipe {
  _id?: ObjectId
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
  ratingCount: number
  author: {
    name: string
    avatar?: string
  }
  tags: string[]
  nutrition?: {
    calories: number
    protein: string
    carbs: string
    fat: string
  }
  createdAt: Date
  updatedAt: Date
}

// Database Operations
export async function getRecipes(filter: Partial<Recipe> = {}) {
  const db = await getDatabase()
  const recipes = await db
    .collection<Recipe>('recipes')
    .find(filter)
    .sort({ createdAt: -1 })
    .toArray()
  return recipes
}

export async function getRecipeById(id: string) {
  const db = await getDatabase()
  const recipe = await db
    .collection<Recipe>('recipes')
    .findOne({ _id: new ObjectId(id) })
  return recipe
}

export async function createRecipe(recipe: Omit<Recipe, '_id' | 'createdAt' | 'updatedAt'>) {
  const db = await getDatabase()
  const result = await db.collection<Recipe>('recipes').insertOne({
    ...recipe,
    createdAt: new Date(),
    updatedAt: new Date()
  } as Recipe)
  return result
}

export async function updateRecipe(id: string, updates: Partial<Recipe>) {
  const db = await getDatabase()
  const result = await db.collection<Recipe>('recipes').updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        ...updates,
        updatedAt: new Date()
      }
    }
  )
  return result
}

export async function deleteRecipe(id: string) {
  const db = await getDatabase()
  const result = await db
    .collection<Recipe>('recipes')
    .deleteOne({ _id: new ObjectId(id) })
  return result
}

export async function getFeaturedRecipes(limit: number = 5) {
  const db = await getDatabase()
  const recipes = await db
    .collection<Recipe>('recipes')
    .find({ rating: { $gte: 4.5 } })
    .sort({ rating: -1 })
    .limit(limit)
    .toArray()
  return recipes
}

export async function getRecipesByCategory(category: Recipe['category']) {
  const db = await getDatabase()
  const recipes = await db
    .collection<Recipe>('recipes')
    .find({ category })
    .sort({ createdAt: -1 })
    .toArray()
  return recipes
}

export async function searchRecipes(query: string) {
  const db = await getDatabase()
  const recipes = await db
    .collection<Recipe>('recipes')
    .find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { tags: { $regex: query, $options: 'i' } }
      ]
    })
    .toArray()
  return recipes
}

export default clientPromise
