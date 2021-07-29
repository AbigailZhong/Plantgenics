import { Link } from 'react-router-dom';
import logo from '../resources/plant-logo.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light">
        <Link className="navbar-brand" to="/">
            <img className="brand" src={logo} alt='logo' /> 
        </Link>

        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/shop" className="nav-link">Shop</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link">Admin Login</Link>
            </li>
            </ul>
        </div>
        </nav>

    )
}

export default Navbar;