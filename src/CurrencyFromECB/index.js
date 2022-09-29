import React, { useEffect, useState } from "react";
import { useCurrencyFromECB, currencyFromECB } from "./useCurrencyFromECB";
import { Section } from "./styled";


const CurrencyFromECB = () => {

   const [currencyFromECB, setCurrencyFromECB] = useState([{
      date: "",
      rates: {}
   }]);
   useEffect(() => {
      const response = fetch('https://api.exchangerate.host/latest?base=PLN')
         .then(response => response.json())
         .then(response => {
            setTimeout(() => setCurrencyFromECB({
               date: response.date,
               rates: response.rates
            }), 1000);
         })
   }, [])
   //console.log(currencyFromECB);
   
   return (
      <Section>{`Kursy walut pochodzą z dnia: ${(currencyFromECB.date)}`} </Section>
   )

};

export default CurrencyFromECB;