import { Link } from 'react-router-dom';
import logo from './plant-logo.png';
import './Custom.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm justify-content-between">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className="brand" src={logo} alt='logo' /> 
                </Link>
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