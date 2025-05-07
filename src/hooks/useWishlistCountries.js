import { useEffect, useState } from "react";

export function useWishlistCountries(wishlist) {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (wishlist.length === 0) {
            setCountries([]);
            return;
        }

        const fetchWishlistCountries = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const codes = wishlist.join(',');
                const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`);

                if (!response.ok) throw new Error(`Failed to fetch countries: ${response.statusText}`);

                const data = await response.json();
                setCountries(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        } 
        fetchWishlistCountries();

    }, [wishlist]);

    return { countries, isLoading, error };
}