import { Link }  from "react-router-dom"
import Footer from "../components/Footer"
function Products (){
    return (
  <>
       <Link to="/products"/>
       
       <section className="products-services">
       <div className="products-services-content">
         <h2>Our Products and Services</h2>
         <div className="product-item">
           <h3>Japanese Language Courses</h3>
           <p>
             Explore our comprehensive Japanese language courses designed for all levels, from beginners to advanced learners. Master the language with our expert instructors and interactive learning materials.
           </p>
           <a className="cta-button">Learn More</a>
         </div>
 
         <div className="product-item">
           <h3>Cultural Workshops</h3>
           <p>
             Immerse yourself in the richness of Japanese culture through our engaging workshops. From traditional tea ceremonies to calligraphy, our cultural experiences offer a deeper understanding of Japan.
           </p>
           <a className="cta-button">Explore Workshops</a>
         </div>
       </div>
     </section>
     {/* <section>
        <Footer></Footer>
     </section> */}
  </>
    )
}

export default Products