import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Contact Book
        </Link>
        <Link to="/contacts/createcontact" className="btn btn-light ml-auto">
          Create Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
