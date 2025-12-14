# Blog Management System

This document explains how to manage recipes (blog posts) in the Food Recipe Blog.

## Overview

The blog management system provides full CRUD (Create, Read, Update, Delete) functionality for recipes through:
- **Admin Dashboard**: Visual interface at `/admin`
- **REST API**: Programmatic access at `/api/recipes`

## Getting Started

### 1. Set Up MongoDB

1. Create a free MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Get your connection string

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/food_recipe_blog
```

### 3. Access the Admin Dashboard

Navigate to `http://localhost:3000/admin` (or your deployed URL + `/admin`)

## Admin Dashboard Features

### Dashboard (`/admin`)
- View all recipes in a table
- Search recipes by title or category
- See statistics by category
- Quick access to edit/delete recipes

### Create Recipe (`/admin/recipes/new`)
- Add new recipes with full details
- Dynamic ingredient and instruction lists
- Tag management
- Nutrition information (optional)

### Edit Recipe (`/admin/recipes/[id]`)
- Modify existing recipes
- All fields are pre-populated
- Changes save to database instantly

## API Endpoints

### GET /api/recipes
Fetch all recipes or search/filter.

```bash
# Get all recipes
curl http://localhost:3000/api/recipes

# Search recipes
curl http://localhost:3000/api/recipes?q=pasta

# Filter by category
curl http://localhost:3000/api/recipes?category=dinner
```

### POST /api/recipes
Create a new recipe.

```bash
curl -X POST http://localhost:3000/api/recipes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Spaghetti Carbonara",
    "description": "Classic Italian pasta dish",
    "category": "dinner",
    "image": "https://example.com/image.jpg",
    "ingredients": ["400g spaghetti", "200g pancetta", "4 eggs"],
    "instructions": ["Cook pasta", "Fry pancetta", "Mix eggs with cheese"],
    "cookTime": "20 mins",
    "prepTime": "10 mins",
    "totalTime": "30 mins",
    "difficulty": "Medium",
    "servings": 4,
    "author": { "name": "Chef John" },
    "tags": ["italian", "pasta", "quick"]
  }'
```

### GET /api/recipes/[id]
Get a single recipe by ID.

```bash
curl http://localhost:3000/api/recipes/507f1f77bcf86cd799439011
```

### PUT /api/recipes/[id]
Update an existing recipe.

```bash
curl -X PUT http://localhost:3000/api/recipes/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Recipe Title",
    "servings": 6
  }'
```

### DELETE /api/recipes/[id]
Delete a recipe.

```bash
curl -X DELETE http://localhost:3000/api/recipes/507f1f77bcf86cd799439011
```

## Recipe Schema

```typescript
interface Recipe {
  _id: ObjectId           // Auto-generated
  title: string           // Required
  description: string     // Required
  category: 'breakfast' | 'lunch' | 'dinner' | 'desserts'  // Required
  image: string           // Required - URL to image
  ingredients: string[]   // Required - List of ingredients
  instructions: string[]  // Required - Step-by-step instructions
  cookTime: string        // Required - e.g., "30 mins"
  prepTime: string        // Required - e.g., "15 mins"
  totalTime: string       // Required - e.g., "45 mins"
  difficulty: 'Easy' | 'Medium' | 'Hard'  // Required
  servings: number        // Required
  rating: number          // Default: 0
  ratingCount: number     // Default: 0
  author: {
    name: string
    avatar?: string
  }
  tags: string[]          // Optional - for search/filtering
  nutrition?: {
    calories: number
    protein: string
    carbs: string
    fat: string
  }
  createdAt: Date         // Auto-generated
  updatedAt: Date         // Auto-updated
}
```

## Deployment on Vercel

1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variable in Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
4. Deploy

The admin dashboard and API will work automatically after deployment.

## Security Considerations

For production, consider adding:
- Authentication for the admin dashboard
- Rate limiting on API endpoints
- Input validation and sanitization

Example with NextAuth.js:
```typescript
// In your admin pages, add authentication check
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
  const session = await getServerSession()
  if (!session) redirect('/login')
  // ... rest of component
}
```

## Troubleshooting

### "Please add your MONGODB_URI to .env.local"
Ensure you have created `.env.local` with a valid MongoDB connection string.

### "Failed to fetch recipes"
- Check if MongoDB Atlas allows connections from your IP
- Verify the connection string is correct
- Ensure the database user has read/write permissions

### Recipes not showing on the main site
The main site currently uses static data. To use database recipes:
1. Modify `app/page.tsx` to fetch from `/api/recipes`
2. Convert to Server Component or use `useEffect` to fetch data
