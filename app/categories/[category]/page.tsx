import Link from 'next/link';

const categoryInfo: { [key: string]: any } = {
  'breakfast': {
    name: 'Breakfast',
    description: 'Start your day right with these delicious morning recipes',
    color: 'from-orange-400 to-orange-600',
    icon: '🌅'
  },
  'lunch': {
    name: 'Lunch',
    description: 'Quick and satisfying midday meals',
    color: 'from-red-400 to-red-600',
    icon: '🥗'
  },
  'dinner': {
    name: 'Dinner',
    description: 'Hearty dishes perfect for evening meals',
    color: 'from-orange-500 to-red-500',
    icon: '🍽️'
  },
  'desserts': {
    name: 'Desserts',
    description: 'Sweet treats to satisfy your cravings',
    color: 'from-pink-400 to-red-500',
    icon: '🍰'
  },
  'vegetarian': {
    name: 'Vegetarian',
    description: 'Delicious plant-based recipes for everyone',
    color: 'from-green-400 to-green-600',
    icon: '🥬'
  },
  'quick-easy': {
    name: 'Quick & Easy',
    description: 'Simple recipes ready in 30 minutes or less',
    color: 'from-yellow-400 to-orange-500',
    icon: '⚡'
  }
};

const recipesByCategory: { [key: string]: any[] } = {
  'breakfast': [
    {
      slug: 'fluffy-blueberry-pancakes',
      title: 'Fluffy Blueberry Pancakes',
      description: 'Light, airy pancakes bursting with fresh blueberries',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
      prepTime: '10 min',
      cookTime: '15 min',
      servings: 4
    },
    {
      slug: 'triple-berry-smoothie-bowl',
      title: 'Triple Berry Smoothie Bowl',
      description: 'Refreshing and nutritious smoothie bowl topped with fresh fruits',
      image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80',
      prepTime: '10 min',
      cookTime: '0 min',
      servings: 1
    },
    {
      slug: 'avocado-toast-deluxe',
      title: 'Avocado Toast Deluxe',
      description: 'Creamy avocado on sourdough with perfectly poached eggs',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80',
      prepTime: '5 min',
      cookTime: '10 min',
      servings: 2
    },
    {
      slug: 'french-toast-casserole',
      title: 'French Toast Casserole',
      description: 'Overnight baked french toast perfect for weekend brunch',
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80',
      prepTime: '15 min',
      cookTime: '45 min',
      servings: 8
    },
    {
      slug: 'breakfast-burrito',
      title: 'Loaded Breakfast Burrito',
      description: 'Protein-packed burrito with eggs, cheese, and veggies',
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80',
      prepTime: '10 min',
      cookTime: '15 min',
      servings: 4
    },
    {
      slug: 'homemade-granola',
      title: 'Crunchy Homemade Granola',
      description: 'Healthy granola with nuts, seeds, and dried fruits',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
      prepTime: '10 min',
      cookTime: '30 min',
      servings: 12
    }
  ],
  'lunch': [
    {
      slug: 'chicken-caesar-wrap',
      title: 'Chicken Caesar Wrap',
      description: 'Fresh and satisfying wrap with crispy chicken and caesar dressing',
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80',
      prepTime: '15 min',
      cookTime: '10 min',
      servings: 2
    },
    {
      slug: 'mediterranean-quinoa-bowl',
      title: 'Mediterranean Quinoa Bowl',
      description: 'Healthy and colorful bowl packed with fresh vegetables and herbs',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
      prepTime: '10 min',
      cookTime: '20 min',
      servings: 2
    },
    {
      slug: 'caprese-panini',
      title: 'Caprese Panini',
      description: 'Grilled sandwich with fresh mozzarella, tomatoes, and basil',
      image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&q=80',
      prepTime: '10 min',
      cookTime: '8 min',
      servings: 2
    }
  ],
  'dinner': [
    {
      slug: 'creamy-tuscan-chicken',
      title: 'Creamy Tuscan Chicken',
      description: 'Tender chicken in a luscious sun-dried tomato cream sauce with spinach',
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80',
      prepTime: '15 min',
      cookTime: '25 min',
      servings: 4
    },
    {
      slug: 'homemade-margherita-pizza',
      title: 'Homemade Margherita Pizza',
      description: 'Simple and delicious pizza with fresh mozzarella and basil',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
      prepTime: '20 min',
      cookTime: '15 min',
      servings: 4
    },
    {
      slug: 'beef-stir-fry',
      title: 'Asian Beef Stir Fry',
      description: 'Quick and flavorful stir fry with tender beef and crisp vegetables',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80',
      prepTime: '15 min',
      cookTime: '12 min',
      servings: 4
    }
  ],
  'desserts': [
    {
      slug: 'classic-chocolate-chip-cookies',
      title: 'Classic Chocolate Chip Cookies',
      description: 'Perfectly chewy cookies with melty chocolate chips',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
      prepTime: '15 min',
      cookTime: '12 min',
      servings: 24
    },
    {
      slug: 'molten-chocolate-lava-cake',
      title: 'Molten Chocolate Lava Cake',
      description: 'Decadent chocolate cake with a gooey molten center',
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80',
      prepTime: '15 min',
      cookTime: '12 min',
      servings: 4
    },
    {
      slug: 'new-york-cheesecake',
      title: 'Classic New York Cheesecake',
      description: 'Creamy, rich cheesecake with a graham cracker crust',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80',
      prepTime: '30 min',
      cookTime: '60 min',
      servings: 12
    }
  ],
  'vegetarian': [
    {
      slug: 'mediterranean-quinoa-bowl',
      title: 'Mediterranean Quinoa Bowl',
      description: 'Healthy and colorful bowl packed with fresh vegetables and herbs',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
      prepTime: '10 min',
      cookTime: '20 min',
      servings: 2
    },
    {
      slug: 'vegetarian-pad-thai',
      title: 'Vegetarian Pad Thai',
      description: 'Classic Thai noodles with tofu and vegetables',
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80',
      prepTime: '15 min',
      cookTime: '15 min',
      servings: 4
    },
    {
      slug: 'stuffed-bell-peppers',
      title: 'Stuffed Bell Peppers',
      description: 'Colorful peppers filled with rice, beans, and vegetables',
      image: 'https://images.unsplash.com/photo-1476124369491-54104091fdb7?w=800&q=80',
      prepTime: '20 min',
      cookTime: '40 min',
      servings: 4
    }
  ],
  'quick-easy': [
    {
      slug: 'grilled-salmon-asparagus',
      title: 'Grilled Salmon with Asparagus',
      description: 'Perfectly seasoned salmon with crispy roasted asparagus',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
      prepTime: '10 min',
      cookTime: '15 min',
      servings: 2
    },
    {
      slug: 'shrimp-tacos',
      title: 'Quick Shrimp Tacos',
      description: 'Spicy grilled shrimp tacos with fresh slaw',
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80',
      prepTime: '10 min',
      cookTime: '8 min',
      servings: 4
    },
    {
      slug: 'one-pot-pasta',
      title: 'One-Pot Creamy Pasta',
      description: 'Easy pasta dish that cooks everything in one pot',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80',
      prepTime: '5 min',
      cookTime: '15 min',
      servings: 4
    }
  ]
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categoryInfo[params.category] || categoryInfo['breakfast'];
  const recipes = recipesByCategory[params.category] || recipesByCategory['breakfast'];

  return (
    <>
        {/* Hero Section */}
        <section className={`bg-gradient-to-r ${category.color} py-20`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-7xl mb-4">{category.icon}</div>
              <h1 className="text-5xl font-bold text-white mb-4">{category.name} Recipes</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                {category.description}
              </p>
              <div className="flex items-center justify-center space-x-2 text-white/80">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
                <span>/</span>
                <span className="text-white font-semibold">{category.name}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Recipe Count & Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-600">
                  <span className="font-bold text-gray-900">{recipes.length}</span> delicious recipes found
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <label htmlFor="sort" className="text-sm text-gray-600">Sort by:</label>
                <select
                  id="sort"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                >
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>Quick First</option>
                  <option>A-Z</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Recipes Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map((recipe) => (
                <Link
                  key={recipe.slug}
                  href={`/blog/${recipe.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`bg-gradient-to-r ${category.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                          {category.name}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                        {recipe.title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {recipe.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 mr-1 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {recipe.prepTime}
                          </div>
                          <div className="flex items-center">
                            <svg className="w-5 h-5 mr-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            </svg>
                            {recipe.cookTime}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {recipe.servings} servings
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Browse Other Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Other Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(categoryInfo)
                .filter(([slug]) => slug !== params.category)
                .map(([slug, cat]) => (
                  <Link
                    key={slug}
                    href={`/categories/${slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <div className="text-4xl mb-2">{cat.icon}</div>
                      <h3 className="font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                        {cat.name}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-16 bg-gradient-to-r ${category.color}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Love These Recipes?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to get new {category.name.toLowerCase()} recipes delivered to your inbox!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-full outline-none"
              />
              <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
    </>
  );
}
