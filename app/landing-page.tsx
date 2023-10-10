import Head from 'next/head';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-purple-500 h-screen">
      <Head>
        <title>Discover Your City</title>
      </Head>
      <div className="flex flex-col justify-center items-center h-full">
        <header className="text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your City</h1>
          <p className="text-lg md:text-xl mb-8">Explore hidden gems and unique experiences in your city.</p>
          <a href="#explore" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full text-lg md:text-xl transition duration-300 ease-in-out transform hover:scale-105">Get Started</a>
        </header>

        <section className="mt-16 text-white text-center">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">Discover</h3>
              <p className="text-lg">Find exciting activities and attractions near you.</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">Plan</h3>
              <p className="text-lg">Create custom itineraries for a perfect day out.</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">Share</h3>
              <p className="text-lg">Share your favorite spots with friends and fellow explorers.</p>
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
