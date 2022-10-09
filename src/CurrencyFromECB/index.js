import React, { useEffect, useState } from "react";
import { Section } from "./styled";

export const useCurrencyFromECB = () => {

   const [currencyFromECB, setCurrencyFromECB] = useState({
      date: "",
      rates: {},
      state: "loading"
   });

   useEffect(() => {
      const fetchResponse = async () => {
         try {
            const response = await fetch('https://api.exchangerate.host/latest?base=PLN');
            if (!response.ok) {
               throw new Error(response.statusText);
            }
            const { date, rates } = await response.json();
            setCurrencyFromECB({
               date,
               rates,
               state: "success"
            });
         } catch {
            setCurrencyFromECB({
               //date: {},
               //rates: {},
               state: "fail"
            });
         }
      };
      setTimeout(fetchResponse, 1000);
   }, []);
   return currencyFromECB;
};