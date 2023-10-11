// pages/index.js (or any other page)
import Head from 'next/head';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-g from-gray-100 to-purple-500">
      <Head>
        <title>Discover Your City</title>
      </Head>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">Discover Your City</h1>
          <a href="/login" className="text-white hover:text-gray-300">Login</a>
        </div>
      </nav>
      <div className="container mx-auto py-16 text-center">
        <header className="text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Discover Your City</h1>
          <p className="text-lg sm:text-xl md:text-xl lg:text-3xl mb-8">Explore hidden gems and unique experiences in your city.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full text-lg sm:text-xl md:text-xl lg:text-3xl transition duration-300 ease-in-out transform hover:scale-105">Get Started</button>
        </header>

        <section className="mt-16 text-white">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-4">
              <h3 className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-semibold mb-2">Discover</h3>
              <p className="text-lg sm:text-xl md:text-xl lg:text-3xl">Find exciting activities and attractions near you.</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-semibold mb-2">Plan</h3>
              <p className="text-lg sm:text-xl md:text-xl lg:text-3xl">Create custom itineraries for a perfect day out.</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-semibold mb-2">Share</h3>
              <p className="text-lg sm:text-xl md:text-xl lg:text-3xl">Earn money by sharing your favorite spots with fellow explorers.</p>
            </div>
          </div>
        </section>

        <section className="py-16" id="explore">
          {/* Add your content and call-to-action specific to exploration here */}
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
