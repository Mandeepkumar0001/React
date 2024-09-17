import { useState, useEffect } from "react";

export function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/2bdc44aa6cf04a5687af9f269a7b3a5b/latest/${currency}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);  // Check the structure of the response
                setData(data.conversion_rates);  // Modify according to the API response structure
            })
            .catch((err) => console.error("Failed to fetch data:", err));
    }, [currency]);
    return data;
}