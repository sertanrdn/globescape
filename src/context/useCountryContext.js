import { useContext } from "react";
import { CountryContext } from "./CountryContextValue";

export function useCountryContext() {
    return useContext(CountryContext);
}