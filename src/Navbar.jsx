import './Navbar.css'
import { CiHeart, CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="nav-ctr container-fluid space-between">
            <a href="/" className="fw-bold navbar-brand">ShoesON!</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#hamburger-menu" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse space-between" id="hamburger-menu">
                <ul className="navbar-nav nav-left">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Products</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Brands</a>
                        <ul className="dropdown-menu">
                            <li><a href="/" className="dropdown-item">Adidas</a></li>
                            <li><a href="/" className="dropdown-item">Asics</a></li>
                            <li><a href="/" className="dropdown-item">Converse</a></li>
                            <li><a href="/" className="dropdown-item">Fila</a></li>
                            <li><a href="/" className="dropdown-item">New Balance</a></li>
                            <li><a href="/" className="dropdown-item">Nike</a></li>
                            <li><a href="/" className="dropdown-item">Puma</a></li>
                            <li><a href="/" className="dropdown-item">Under Armour</a></li>
                            <li><a href="/" className="dropdown-item">Vans</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Categories</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link highlight fw-bold">SALE</a>
                    </li>
                </ul>
                <ul className="navbar-nav nav-right">
                    <form className="d-flex search-form">
                        <input type="search" className="search-bar form-control" aria-label="Search" />
                        <button type="submit" className="search-btn btn">Search</button>
                    </form>
                    <li className="nav-item">
                        <a href="/" className="nav-link"><CiUser /></a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link"><CiHeart /></a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link"><FiShoppingCart /></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
