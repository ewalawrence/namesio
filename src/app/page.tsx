import Link from 'next/link';
import Head from 'next/head';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Namesio - Discover African Names</title>
        <meta name="description" content="Explore the names and meanings of Yoruba, Igbo, and Hausa names." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center" 
           style={{ backgroundImage: "url('/bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-100"></div>
        <div className="mt-10 relative z-10 text-center text-white p-6 max-w-3xl mx-auto">
          <h1 className="mb-10 mt-10 pt-9 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg">
            Namesio
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-9 leading-relaxed drop-shadow-md">
            Discover the rich meanings behind Yoruba, Igbo, and Hausa names. Dive into the cultural heritage and find the perfect name for your loved ones.
          </p>
          <span>
            
          </span>
          <Link
            className="bg-blue-800 hover:bg-blue-900 text-white 
            font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform 
            transform hover:scale-105" 
            href='/hausa'
          >
            Click to continue to NAMESIO
          </Link>
        </div>
      </div>
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;