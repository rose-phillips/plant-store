import { Link } from "react-router";

export const NavBar = () => {
  return (
    <nav>
      <Link className="nav-links" to="/">Home</Link>
      <Link className="nav-links" to="/all-products">Shop</Link>
      <Link className="nav-links" to="/about-us">About Us</Link>
    </nav>

  )
}
