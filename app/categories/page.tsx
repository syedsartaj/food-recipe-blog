import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const categories = [
  {
    slug: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day right with delicious morning recipes',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80',
    recipeCount: 45,
    color: 'from-orange-400 to-orange-600'
  },
  {
    slug: 'lunch',
    name: 'Lunch',
    description: 'Quick and satisfying midday meals',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    recipeCount: 38,
    color: 'from-red-400 to-red-600'
  },
  {
    slug: 'dinner',
    name: 'Dinner',
    description: 'Hearty dishes perfect for evening meals',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    recipeCount: 62,
    color: 'from-orange-500 to-red-500'
  },
  {
    slug: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats to satisfy your cravings',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80',
    recipeCount: 51,
    color: 'from-pink-400 to-red-500'
  },
  {
    slug: 'vegetarian',
    name: 'Vegetarian',
    description: 'Delicious plant-based recipes for everyone',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    recipeCount: 34,
    color: 'from-green-400 to-green-600'
  },
  {
    slug: 'quick-easy',
    name: 'Quick & Easy',
    description: 'Simple recipes ready in 30 minutes or less',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80',
    recipeCount: 42,
    color: 'from-yellow-400 to-orange-500'
  }
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-50 to-red-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Recipe Categories</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse recipes by category and find exactly what you're looking for
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="group"
                >
                  <article className="relative h-96 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${category.color} mb-4`}>
                        <span className="text-2xl font-bold text-white">{category.recipeCount}</span>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                        {category.name}
                      </h2>
                      <p className="text-gray-200 mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center text-orange-300 font-semibold">
                        <span>View Recipes</span>
                        <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Tags Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Tags</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Comfort Food', 'Healthy', 'Italian', 'Mexican', 'Asian', 'Vegan',
                'Gluten-Free', 'Low-Carb', 'Meal Prep', 'One-Pot', 'Grilling',
                'Baking', 'Soup', 'Salad', 'Pasta', 'Chicken', 'Seafood', 'Appetizers'
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-6 py-3 bg-white rounded-full text-gray-700 font-semibold shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* By Meal Type Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Meal Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/categories/breakfast" className="group">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-8 text-center hover:shadow-lg transition-all">
                  <svg className="w-16 h-16 mx-auto mb-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Morning Meals</h3>
                  <p className="text-gray-600">Breakfast & Brunch</p>
                </div>
              </Link>
              <Link href="/categories/lunch" className="group">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-8 text-center hover:shadow-lg transition-all">
                  <svg className="w-16 h-16 mx-auto mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Midday Meals</h3>
                  <p className="text-gray-600">Lunch Ideas</p>
                </div>
              </Link>
              <Link href="/categories/dinner" className="group">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-8 text-center hover:shadow-lg transition-all">
                  <svg className="w-16 h-16 mx-auto mb-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Evening Meals</h3>
                  <p className="text-gray-600">Dinner Recipes</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Decide What to Cook?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              View all recipes or let us inspire you with our featured picks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
              >
                Browse All Recipes
              </Link>
              <Link
                href="/"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
