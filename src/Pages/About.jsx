import { Link }  from "react-router-dom"

function About (){
    return (
       <>
       
        <Link to="/about"/>
        <section className="company-overview">
      <div className="company-content">
        <h2>About LJapanese</h2>
        <p>
          LJapanese is a leading institution dedicated to providing high-quality Japanese language education. Established in 1996, we have been helping individuals from diverse backgrounds to learn and master the Japanese language.
        </p>
        <p>
          Our team consists of experienced educators and language experts passionate about sharing the beauty of the Japanese language and culture. Together, we strive to create a supportive learning environment that fosters linguistic proficiency and cultural appreciation.
        </p>
        <p>
          At LJapanese, we value diversity, inclusivity, and the joy of learning. Our culture promotes collaboration, curiosity, and a commitment to excellence in language education. Join us on a journey to explore the rich tapestry of the Japanese language and unlock exciting opportunities for personal and professional growth.
        </p>
      </div>
    </section>

       </> 
    )
}

export default About