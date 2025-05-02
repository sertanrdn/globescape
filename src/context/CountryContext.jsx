import { useEffect, useState } from "react";
import { CountryContext } from "./CountryContextValue";


export function CountryProvider({ children }) {
    const [visited, setVisited] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedVisited = JSON.parse(localStorage.getItem('visited') || '[]');
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

        setVisited(storedVisited);
        setWishlist(storedWishlist);
    }, []);

    useEffect(() => {
        localStorage.setItem('visited', JSON.stringify(visited));
    }, [visited]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToVisited = (code) => {
        if (!visited.includes(code)) setVisited([...visited, code]);

        setWishlist(wishlist.filter(c => c !== code)); //remove from the wishlist
    }

    const addToWishlist = (code) => {
        if (!wishlist.includes(code)) setWishlist([...wishlist, code]);

        setVisited(visited.filter(c => c !== code)); // remove from visited 
    }

    return (
        <CountryContext.Provider 
            value={{ visited, wishlist, addToVisited, addToWishlist }}
        >
            {children}
        </CountryContext.Provider>
    );
}
