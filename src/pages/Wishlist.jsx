import { useCountryContext } from "../context/useCountryContext";
import { useWishlistCountries } from "../hooks/useWishlistCountries";
import '../styles/Wishlist.css';

export function Wishlist() {
    const { wishlist, addToWishlist } = useCountryContext();
    const { countries, isLoading, error } = useWishlistCountries(wishlist);

    console.log('Wishlist: ', wishlist);

    return (
        <div>
            <h1>Wishlist</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
             <div className='wishlist-container'>
                {countries.length > 0 ? (
                    countries.map((country) => (
                            <div key={country.cca2} className="country-card">
                                <img src={country.flags.png} alt={`Flag of ${country.name.official}`} />
                                <h2>{country.name.common}</h2>
                                <p>{country.region}</p>
                                <button onClick={() => addToWishlist(country.cca2)}>
                                    Remove from Wishlist
                                </button>
                            </div>
                        ))
                    ) : (
                        !isLoading && <p>You have no countries in your wishlist</p>
                    )}
             </div>
        </div>
    );
}