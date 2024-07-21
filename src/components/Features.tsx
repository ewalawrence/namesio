const Features: React.FC = () => {
    return (
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Comprehensive Database</h3>
              <p>Explore an extensive collection of names from Yoruba, Igbo, and Hausa cultures.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Cultural Insights</h3>
              <p>Learn about the cultural significance and historical context of each name.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">User-Friendly Interface</h3>
              <p>Enjoy a seamless experience with our intuitive and easy-to-use interface.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
  