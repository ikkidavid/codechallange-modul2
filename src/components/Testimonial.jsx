// Carousel.js
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Learning Japanese at LJapanese has been an incredible experience. The lessons are engaging, and the instructors are knowledgeable. I highly recommend it!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: `'I never thought learning a new language could be so enjoyable. LJapanese made the process easy and fun. I'm grateful for the supportive learning environment.'`,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    },
    {
      id: 3,
      name: 'Alex Johnson',
      text: `'The cultural immersion aspect of LJapanese sets it apart. It's not just about the language; it's about understanding and appreciating the Japanese way of life.'`,
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
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