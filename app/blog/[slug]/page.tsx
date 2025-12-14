import Link from 'next/link';
import { getSmakslyBlogBySlug, formatBlogDate, estimateReadTime } from '@/lib/smaksly-blogs';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function RecipePage({ params }: { params: { slug: string } }) {
  const blog = await getSmakslyBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  // Parse blog body for ingredients and instructions (if structured)
  // For now, we'll display the blog body as the main content
  const recipe = {
    title: blog.title,
    description: blog.body
      .replace(/<[^>]*>/g, ' ')
      .split('\n')
      .filter(line => line.trim().length > 0)[0]
      ?.slice(0, 200) || '',
    image: blog.image_url || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80',
    prepTime: '10 min',
    cookTime: estimateReadTime(blog.body),
    servings: 4,
    category: blog.category || 'Recipe',
    difficulty: 'Medium',
    publishDate: formatBlogDate(blog.publish_date),
    body: blog.body
  };

  return (
    <>
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

        {/* Blog Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 text-gray-500 text-sm">
              Published on {recipe.publishDate}
            </div>
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-orange-500 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
              dangerouslySetInnerHTML={{ __html: recipe.body }}
            />
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
    </>
  );
}
