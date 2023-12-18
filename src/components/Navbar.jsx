import { Link }  from "react-router-dom"
function Navbar ( ) {
    return (
       
       <nav className="navbar">
        
        <div className="brand-tittle">LJAPANESE</div>

        <div className="navbar-links">
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/products">Products</Link>
              <Link to="/team">Team</Link>
            </ul>
        </div>

       </nav>
    )
}

export default Navbar