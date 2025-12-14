import Link from 'next/link';

const recipes = [
  {
    slug: 'creamy-tuscan-chicken',
    title: 'Creamy Tuscan Chicken',
    description: 'Tender chicken in a luscious sun-dried tomato cream sauce with spinach',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80',
    prepTime: '15 min',
    cookTime: '25 min',
    servings: 4,
    category: 'Dinner'
  },
  {
    slug: 'fluffy-blueberry-pancakes',
    title: 'Fluffy Blueberry Pancakes',
    description: 'Light, airy pancakes bursting with fresh blueberries',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 4,
    category: 'Breakfast'
  },
  {
    slug: 'classic-chocolate-chip-cookies',
    title: 'Classic Chocolate Chip Cookies',
    description: 'Perfectly chewy cookies with melty chocolate chips',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
    prepTime: '15 min',
    cookTime: '12 min',
    servings: 24,
    category: 'Desserts'
  },
  {
    slug: 'mediterranean-quinoa-bowl',
    title: 'Mediterranean Quinoa Bowl',
    description: 'Healthy and colorful bowl packed with fresh vegetables and herbs',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: 2,
    category: 'Vegetarian'
  },
  {
    slug: 'grilled-salmon-asparagus',
    title: 'Grilled Salmon with Asparagus',
    description: 'Perfectly seasoned salmon with crispy roasted asparagus',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 2,
    category: 'Quick & Easy'
  },
  {
    slug: 'chicken-caesar-wrap',
    title: 'Chicken Caesar Wrap',
    description: 'Fresh and satisfying wrap with crispy chicken and caesar dressing',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80',
    prepTime: '15 min',
    cookTime: '10 min',
    servings: 2,
    category: 'Lunch'
  },
  {
    slug: 'homemade-margherita-pizza',
    title: 'Homemade Margherita Pizza',
    description: 'Simple and delicious pizza with fresh mozzarella and basil',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: 4,
    category: 'Dinner'
  },
  {
    slug: 'triple-berry-smoothie-bowl',
    title: 'Triple Berry Smoothie Bowl',
    description: 'Refreshing and nutritious smoothie bowl topped with fresh fruits',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 1,
    category: 'Breakfast'
  },
  {
    slug: 'molten-chocolate-lava-cake',
    title: 'Molten Chocolate Lava Cake',
    description: 'Decadent chocolate cake with a gooey molten center',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80',
    prepTime: '15 min',
    cookTime: '12 min',
    servings: 4,
    category: 'Desserts'
  }
];

export default function BlogPage() {
  return (
    <>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-50 to-red-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">All Recipes</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Discover delicious recipes for every occasion. From quick weeknight dinners to impressive desserts.
            </p>
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
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {recipe.category}
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

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Browse our recipes by category or get in touch with suggestions!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/categories"
                className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
              >
                Browse Categories
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
    </>
  );
}
