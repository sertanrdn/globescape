import { useEffect, useState } from "react";
import { CountryContext } from "./CountryContextValue";


export function CountryProvider({ children }) {
    const [visited, setVisited] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const [hasLoadedVisited, setHasLoadedVisited] = useState(false);
    const [hasLoadedWishlist, setHasLoadedWishlist] = useState(false);

    useEffect(() => {
        const storedVisitedRaw = localStorage.getItem('visited');
        const storedWishlistRaw = localStorage.getItem('wishlist');
    
        console.log("🔍 Raw localStorage visited:", storedVisitedRaw);
        console.log("🔍 Raw localStorage wishlist:", storedWishlistRaw);

        const storedVisited = JSON.parse(localStorage.getItem('visited') || '[]');
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

        setVisited(storedVisited);
        setWishlist(storedWishlist);
        setHasLoadedVisited(true);
        setHasLoadedWishlist(true);
    }, []);

    useEffect(() => {
        if (hasLoadedVisited) {
            localStorage.setItem('visited', JSON.stringify(visited));
        }
        
    }, [visited, hasLoadedVisited]);

    useEffect(() => {
        if (hasLoadedWishlist) {
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
        
    }, [wishlist, hasLoadedWishlist]);

    const addToVisited = (code) => {
        setVisited((prev) => {
            const isVisited = prev.includes(code);
            const updated = isVisited 
                ? prev.filter(c => c !== code) 
                : [...prev, code];

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
                : [...prev, code];
    
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
