import { Link }  from "react-router-dom"
import React from "react"
import TestimonialsSection from "../components/Testimonial"
import Products from "./Products"
import About from "./About"
function Home (){
    return (
       <>
        <Link to="/"/>
    <header className="hero-section">
      <div className="hero-content">
        <h1>Welcome to LJapanese</h1>
        <p>Unlock the Beauty of the Japanese Language and Culture</p>
      </div>
    </header>

    <section>
      <About></About>
    </section>

      <section>
        <Products></Products>

      </section>

    <section className="testimonials-section">
      <TestimonialsSection></TestimonialsSection>
    </section>

       </> 
    )
}

export default Home