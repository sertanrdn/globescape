import { Map } from "../components/Map";
import '../styles/HomePage.css';

export function HomePage() {
    return (
        <main className="homepage">
            <section className="intro-section">
                <h1>Explore the World</h1>
                <p>
                    Discover countries, mark your adventures, build your wishlist 
                    and learn more on an interactive map!
                </p>
            </section>  
            <Map />
        </main>
    );
}