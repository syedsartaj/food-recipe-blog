# SAVORY - Food & Recipe Blog

A beautiful, appetizing food and recipe blog built with Next.js 14, TypeScript, and Tailwind CSS. Features AI-powered recipe generation, MongoDB database, and a stunning card-based design.

## Features

- **Recipe Categories**: Browse recipes by meal type (Breakfast, Lunch, Dinner, Desserts)
- **Recipe Cards**: Visual cards with cook time, difficulty, ratings, and servings
- **AI Recipe Generation**: Generate new recipes using OpenAI GPT-4
- **Search Functionality**: Find recipes quickly with the search bar
- **Featured Recipes**: Highlight top-rated recipes
- **Responsive Design**: Beautiful on all devices
- **MongoDB Integration**: Store and manage recipes
- **Warm Color Palette**: Orange, red, and cream theme for an appetizing experience

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **AI**: OpenAI GPT-4
- **Icons**: Lucide React
- **Fonts**: Inter (body), Playfair Display (headings)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB instance (local or Atlas)
- OpenAI API key

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd food-recipe-blog
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:

```env
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
food-recipe-blog/
├── app/
│   ├── layout.tsx          # Root layout with fonts and theme
│   ├── page.tsx            # Home page with recipes
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Header.tsx          # Navigation with search
│   ├── Footer.tsx          # Footer with popular recipes
│   ├── RecipeCard.tsx      # Individual recipe card
│   └── CategoryFilter.tsx  # Meal type filter buttons
├── lib/
│   ├── db.ts              # MongoDB connection and operations
│   └── openai.ts          # AI recipe generation functions
├── public/                 # Static assets
├── .env.example           # Environment variables template
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Recipe Schema

```typescript
{
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
```

## Sample Recipes Included

The template includes 12 delicious sample recipes:

### Breakfast
- Fluffy Buttermilk Pancakes
- Avocado Toast with Poached Egg

### Lunch
- Mediterranean Quinoa Bowl
- Grilled Chicken Caesar Salad

### Dinner
- Spicy Thai Basil Chicken
- Creamy Tuscan Salmon
- Beef Bourguignon
- Vegetarian Buddha Bowl

### Desserts
- Classic Chocolate Chip Cookies
- Tiramisu
- Lemon Blueberry Cheesecake
- Molten Chocolate Lava Cake

## AI Features

### Generate Recipe
```typescript
import { generateRecipe } from '@/lib/openai'

const recipe = await generateRecipe('Create a healthy breakfast smoothie bowl recipe')
```

### Generate from Ingredients
```typescript
import { generateRecipeFromIngredients } from '@/lib/openai'

const recipe = await generateRecipeFromIngredients(['chicken', 'tomatoes', 'basil'])
```

### Get Cooking Tips
```typescript
import { getCookingTips } from '@/lib/openai'

const tips = await getCookingTips('roasting vegetables')
```

### Suggest Beverage Pairing
```typescript
import { suggestPairing } from '@/lib/openai'

const pairing = await suggestPairing('Grilled Salmon')
```

## Database Operations

```typescript
import {
  getRecipes,
  getRecipeById,
  createRecipe,
  getFeaturedRecipes,
  searchRecipes
} from '@/lib/db'

// Get all recipes
const recipes = await getRecipes()

// Get featured recipes
const featured = await getFeaturedRecipes(5)

// Search recipes
const results = await searchRecipes('chicken')

// Get recipes by category
const dinners = await getRecipesByCategory('dinner')
```

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  cream: { /* ... */ },
  orange: { /* ... */ },
  red: { /* ... */ }
}
```

### Fonts

Change fonts in `app/layout.tsx`:

```typescript
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
```

## Build for Production

```bash
npm run build
npm start
```

## Deployment

Deploy easily to Vercel:

```bash
npm install -g vercel
vercel
```

Or use any other hosting platform that supports Next.js.

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this template for your projects.

## Credits

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Built with [Next.js](https://nextjs.org)

---

Made with love and great ingredients. Happy cooking!
