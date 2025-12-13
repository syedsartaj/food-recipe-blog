import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const recipeData: { [key: string]: any } = {
  'creamy-tuscan-chicken': {
    title: 'Creamy Tuscan Chicken',
    description: 'Tender chicken in a luscious sun-dried tomato cream sauce with spinach',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=1200&q=80',
    prepTime: '15 min',
    cookTime: '25 min',
    servings: 4,
    category: 'Dinner',
    difficulty: 'Medium',
    ingredients: [
      '4 boneless, skinless chicken breasts',
      '2 tablespoons olive oil',
      '3 cloves garlic, minced',
      '1 cup sun-dried tomatoes, chopped',
      '1 cup heavy cream',
      '1/2 cup chicken broth',
      '2 cups fresh spinach',
      '1/2 cup Parmesan cheese, grated',
      '1 teaspoon Italian seasoning',
      'Salt and pepper to taste',
      'Fresh basil for garnish'
    ],
    instructions: [
      'Season chicken breasts with salt, pepper, and Italian seasoning.',
      'Heat olive oil in a large skillet over medium-high heat. Add chicken and cook 6-7 minutes per side until golden and cooked through. Remove and set aside.',
      'In the same skillet, add garlic and cook for 1 minute until fragrant.',
      'Add sun-dried tomatoes and cook for 2 minutes.',
      'Pour in heavy cream and chicken broth. Bring to a simmer.',
      'Stir in Parmesan cheese until melted and smooth.',
      'Add spinach and cook until wilted, about 2 minutes.',
      'Return chicken to the skillet and spoon sauce over the top.',
      'Simmer for 3-4 minutes to heat through.',
      'Garnish with fresh basil and serve hot over pasta or rice.'
    ],
    nutrition: {
      calories: 485,
      protein: '42g',
      carbs: '12g',
      fat: '31g',
      fiber: '2g',
      sodium: '680mg'
    }
  },
  'fluffy-blueberry-pancakes': {
    title: 'Fluffy Blueberry Pancakes',
    description: 'Light, airy pancakes bursting with fresh blueberries',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=80',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 4,
    category: 'Breakfast',
    difficulty: 'Easy',
    ingredients: [
      '2 cups all-purpose flour',
      '2 tablespoons sugar',
      '2 teaspoons baking powder',
      '1/2 teaspoon salt',
      '2 large eggs',
      '1 3/4 cups milk',
      '1/4 cup melted butter',
      '1 teaspoon vanilla extract',
      '1 1/2 cups fresh blueberries',
      'Maple syrup for serving',
      'Butter for cooking'
    ],
    instructions: [
      'In a large bowl, whisk together flour, sugar, baking powder, and salt.',
      'In a separate bowl, beat eggs, then add milk, melted butter, and vanilla extract.',
      'Pour wet ingredients into dry ingredients and stir until just combined. Don\'t overmix - lumps are okay!',
      'Gently fold in blueberries.',
      'Heat a griddle or large skillet over medium heat and brush with butter.',
      'Pour 1/4 cup batter for each pancake onto the griddle.',
      'Cook until bubbles form on the surface and edges look set, about 2-3 minutes.',
      'Flip and cook for another 2 minutes until golden brown.',
      'Repeat with remaining batter, adding more butter as needed.',
      'Serve hot with maple syrup and extra blueberries.'
    ],
    nutrition: {
      calories: 395,
      protein: '11g',
      carbs: '58g',
      fat: '14g',
      fiber: '3g',
      sodium: '520mg'
    }
  },
  'classic-chocolate-chip-cookies': {
    title: 'Classic Chocolate Chip Cookies',
    description: 'Perfectly chewy cookies with melty chocolate chips',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1200&q=80',
    prepTime: '15 min',
    cookTime: '12 min',
    servings: 24,
    category: 'Desserts',
    difficulty: 'Easy',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 teaspoon baking soda',
      '1 teaspoon salt',
      '1 cup butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup brown sugar, packed',
      '2 large eggs',
      '2 teaspoons vanilla extract',
      '2 cups chocolate chips',
      '1 cup chopped walnuts (optional)'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'In a bowl, combine flour, baking soda, and salt. Set aside.',
      'In a large bowl, beat softened butter with both sugars until creamy.',
      'Add eggs and vanilla extract to the butter mixture and beat well.',
      'Gradually stir in the flour mixture until just combined.',
      'Fold in chocolate chips and walnuts if using.',
      'Drop rounded tablespoons of dough onto ungreased cookie sheets, spacing them 2 inches apart.',
      'Bake for 9-12 minutes or until golden brown around the edges.',
      'Cool on baking sheet for 2 minutes before removing to a wire rack.',
      'Store in an airtight container for up to 1 week.'
    ],
    nutrition: {
      calories: 180,
      protein: '2g',
      carbs: '24g',
      fat: '9g',
      fiber: '1g',
      sodium: '140mg'
    }
  }
};

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = recipeData[params.slug] || recipeData['creamy-tuscan-chicken'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px]">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <Link
                  href={`/categories/${recipe.category.toLowerCase().replace(' & ', '-')}`}
                  className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
                >
                  {recipe.category}
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {recipe.title}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                {recipe.description}
              </p>
            </div>
          </div>
        </section>

        {/* Recipe Info */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-500 uppercase">Prep Time</div>
                <div className="text-xl font-bold text-gray-900">{recipe.prepTime}</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-500 uppercase">Cook Time</div>
                <div className="text-xl font-bold text-gray-900">{recipe.cookTime}</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-500 uppercase">Servings</div>
                <div className="text-xl font-bold text-gray-900">{recipe.servings}</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-500 uppercase">Difficulty</div>
                <div className="text-xl font-bold text-gray-900">{recipe.difficulty}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ingredients and Instructions */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Ingredients */}
              <div className="lg:col-span-1">
                <div className="bg-orange-50 rounded-2xl p-8 sticky top-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Ingredients
                  </h2>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Instructions */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Instructions
                </h2>
                <ol className="space-y-6">
                  {recipe.instructions.map((instruction: string, index: number) => (
                    <li key={index} className="flex">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1.5">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Nutrition Info */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nutrition Information (per serving)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Object.entries(recipe.nutrition).map(([key, value]) => (
                <div key={key} className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-3xl font-bold text-orange-500 mb-2">{value}</div>
                  <div className="text-sm text-gray-600 uppercase">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back to Recipes */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Recipes
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
