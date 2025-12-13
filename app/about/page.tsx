import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-50 to-red-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About the Chef</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate about creating delicious, accessible recipes for home cooks everywhere
            </p>
          </div>
        </section>

        {/* Chef Bio Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Chef Sarah Martinez</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Hello! I'm Sarah, a home cook turned recipe developer with a passion for creating
                    dishes that bring people together. My culinary journey began in my grandmother's
                    kitchen in Tuscany, where I learned that the best meals are made with love, fresh
                    ingredients, and a sprinkle of creativity.
                  </p>
                  <p>
                    After years of experimenting in professional kitchens and teaching cooking classes,
                    I realized my true calling was making delicious food accessible to everyone. Whether
                    you're a beginner cook or a seasoned pro, my recipes are designed to be approachable,
                    foolproof, and most importantly, delicious.
                  </p>
                  <p>
                    I believe that cooking should be joyful, not stressful. That's why every recipe on
                    this blog is tested multiple times to ensure it works perfectly in your home kitchen.
                    No fancy equipment required, just good ingredients and a love for great food.
                  </p>
                  <p>
                    When I'm not in the kitchen, you'll find me at local farmers markets, traveling to
                    discover new flavors, or sharing meals with my family and friends.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                  alt="Chef Sarah Martinez"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Kitchen Philosophy */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">My Kitchen Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cook with Love</h3>
                <p className="text-orange-50">
                  The secret ingredient in every great dish is the care and passion you put into it.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Keep It Simple</h3>
                <p className="text-orange-50">
                  Great food doesn't need to be complicated. Fresh ingredients speak for themselves.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Stay Curious</h3>
                <p className="text-orange-50">
                  Never stop learning, experimenting, and discovering new flavors and techniques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Achievements */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Credentials & Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-orange-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Education
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Le Cordon Bleu - Culinary Arts Diploma</li>
                  <li>Food Styling Certificate - New York Institute</li>
                  <li>Nutrition & Wellness Certification</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Recognition
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Best Food Blog Award 2023</li>
                  <li>Featured in Cooking Magazine</li>
                  <li>Guest Chef on Morning Show Kitchen</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Experience
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>10+ years recipe development</li>
                  <li>Taught 500+ cooking students</li>
                  <li>Created 1000+ tested recipes</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Community
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>50K+ newsletter subscribers</li>
                  <li>Monthly cooking workshops</li>
                  <li>Active cooking community forum</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Let's Cook Together!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to start your culinary adventure? Browse my recipes or get in touch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
              >
                View All Recipes
              </Link>
              <Link
                href="/contact"
                className="bg-white text-orange-500 border-2 border-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
