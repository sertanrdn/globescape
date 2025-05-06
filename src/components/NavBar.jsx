import { Link } from "react-router-dom";
import '../styles/NavBar.css';

export function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/wishlist">Wishlist</Link>
            </div>
        </nav>
    );
}