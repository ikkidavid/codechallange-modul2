import { Link }  from "react-router-dom"
import React from 'react';
import Footer from "../components/Footer";
// import './TestimonialsSection.css'; // Import the corresponding CSS file

const Team = () => {


const testimonials = [
    {
      id: 1,
      name: 'Yama Doe',
      text: 'Lecturer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    },
    {
      id: 2,
      name: 'Yuki Smith',
      text: 'Lecturer',
      image: 'https://images.pexels.com/photos/7580640/pexels-photo-7580640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      name: 'Alex Nakagawa',
      text: 'Lecturer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    },
  ];

  return (
    <>
    <section className="testimonials-section">
      <div className="container">
        <h2>Team  Member</h2>
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
    {/* <section>
        <Footer></Footer>
    </section> */}

</>
  );
};

export default Team;