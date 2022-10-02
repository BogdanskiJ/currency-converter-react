import React, { useEffect, useState } from "react";
//import { useCurrencyFromECB } from "./useCurrencyFromECB";
import { Section } from "./styled";


export const useCurrencyFromECB = () => {

   const [currencyFromECB, setCurrencyFromECB] = useState({
      date: "",
      rates: {}
   });


   useEffect(() => {
      const response = fetch('https://api.exchangerate.host/latest?base=PLN')
         .then(response => response.json())
         .then(response => {
            setTimeout(() => setCurrencyFromECB({
               date: response.date,
               rates: response.rates
            }), 1000);
         })
         .then(console.log(currencyFromECB.rates))
   }, []);

   
   return currencyFromECB;
};