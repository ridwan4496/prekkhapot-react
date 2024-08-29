import "./Navbar1.css";
import logo from "../../images/prekkhapotLogo.jpg";
import search from "../../images/search.svg";
import menu from "../../images/menu.svg";

const Navbar1 = () => {
  return (
    <nav className="navbar1">
      <div className="navbar-left">
        <a href="/">
          <img className="logo" src={logo} alt="prekkhapot-logo" />
        </a>
      </div>
      <div className="navbar-right">
        <div className="navbar-right1">
          <button className="button-login">Login</button>
          <img className="svg-icon" src={search} alt="search-icon" />
          <img className="svg-icon" src={menu} alt="menu-icon" />
        </div>
        <div className="navbar-right2">
          <h4>রবিবার, ২৫ আগস্ট, ২০২৪</h4>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
