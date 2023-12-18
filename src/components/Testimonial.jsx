// Carousel.js
import React from 'react';


const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Learning Japanese at LJapanese has been an incredible experience. The lessons are engaging, and the instructors are knowledgeable. I highly recommend it!',
      image: 'https://images.pexels.com/photos/769768/pexels-photo-769768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: `'I never thought learning a new language could be so enjoyable. LJapanese made the process easy and fun. I'm grateful for the supportive learning environment.'`,
      image: 'https://images.pexels.com/photos/16997640/pexels-photo-16997640/free-photo-of-young-woman-in-a-casual-outfit-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Alex Johnson',
      text: `'The cultural immersion aspect of LJapanese sets it apart. It's not just about the language; it's about understanding and appreciating the Japanese way of life.'`,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Students Say</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} />
              <p>{testimonial.text}</p>
              <span>{testimonial.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default TestimonialsSection;