const testimonials = [
  {
    name: "Benita Fresh",
    role: "App User",
    feedback: "Namesio has been a fantastic resource for understanding the cultural significance of names. It&apos;s user-friendly and incredibly informative!",
  },
  {
    name: "John Smith",
    role: "Researcher",
    feedback: "As someone studying African cultures, Namesio provides invaluable insights into the meanings and origins of names. Highly recommended!",
  },
  {
    name: "Aisha Bello",
    role: "Cultural Enthusiast",
    feedback: "I love how Namesio combines detailed information with an easy-to-navigate interface. It&apos;s perfect for finding names with deep cultural roots.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-12 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row md:justify-around">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg mb-6 md:mb-0 md:w-1/3 mx-3">
              <p className="text-xl italic mb-4">&quot;{testimonial.feedback}&quot;</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
