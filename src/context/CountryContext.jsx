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
        setVisited((prev) => {
            const isVisited = prev.includes(code);
            const updated = isVisited 
                ? prev.filter(c => c !== code) 
                : [...prev.filter(c => c !== code), code];

            //remove from the wishlist
            if (!isVisited) setWishlist((w) => w.filter(c => c !== code));

            return updated;
        }); 
    }

    const addToWishlist = (code) => {
        setWishlist((prev) => {
            const isWishlist = prev.includes(code);
            const updated = isWishlist 
                ? prev.filter(c => c !== code) 
                : [...prev.filter(c => c !== code), code];
    
            // remove from visited 
            if (!isWishlist) {
                setVisited((v) => v.filter(c => c !== code));
            }
    
            return updated;
        })
    }

    return (
        <CountryContext.Provider 
            value={{ visited, wishlist, addToVisited, addToWishlist }}
        >
            {children}
        </CountryContext.Provider>
    );
}
