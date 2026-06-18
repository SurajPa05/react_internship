
import { Link } from 'react-router-dom';
import './comp.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <Link to="/">MyApp</Link>
                </div>
                
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addProduct" className="nav-link">Products</Link>
                    </li>
                </ul>

                <div className="nav-auth">
                    <Link to="/login" className="nav-btn login-btn">Login</Link>
                    <Link to="/signup" className="nav-btn signup-btn">Sign Up</Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar