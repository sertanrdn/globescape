import { useContext } from "react";
import { CountryContext } from "./CountryContext";

export function useCountryContext() {
    return useContext(CountryContext);
}