import Link from 'next/link';
import { getSmakslyBlogs, estimateReadTime, type SmakslyBlog } from '@/lib/smaksly-blogs';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Recipe {
  slug: string;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  category: string;
}

// Transform SmakslyBlog to Recipe format
function transformBlogToRecipe(blog: SmakslyBlog): Recipe {
  // Extract first paragraph as description
  const description = blog.body
    .replace(/<[^>]*>/g, ' ')
    .split('\n')
    .filter(line => line.trim().length > 0)[0]
    ?.slice(0, 120) || 'Delicious recipe';

  // Use read time as cook time
  const cookTime = estimateReadTime(blog.body);

  return {
    slug: blog.slug,
    title: blog.title,
    description: description,
    image: blog.image_url || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    prepTime: '10 min',
    cookTime: cookTime,
    servings: 4,
    category: blog.category || 'Dinner'
  };
}

export default async function BlogPage() {
  const smakslyBlogs = await getSmakslyBlogs();
  const recipes = smakslyBlogs.map(transformBlogToRecipe);
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
            {recipes.length > 0 ? (
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
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No recipes available yet. Check back soon!</p>
              </div>
            )}
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
