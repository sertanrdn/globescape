import { useState, useEffect } from "react";

export function useFetchData(countryCode) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!countryCode) return;
        
        const fetchCountryDetails = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);

                if (!response.ok) throw new Error(`Failed to fetch country details: ${response.body}`);

                const result = await response.json();

                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchCountryDetails();
    }, [countryCode]);

    return { data, isLoading, error };
}