/*

import { useEffect, useState } from "react";

export const useCurrencyFromECB = () => {
    const [currencyFromECB, setCurrencyFromECB] = useState([]);
    useEffect(() => {
        fetch('https://api.exchangerate.host/latest?base=PLN')
            .then(response => response.json())
            .then(response => setCurrencyFromECB({ date: response.date })
            )
    }, [])
};
*/
