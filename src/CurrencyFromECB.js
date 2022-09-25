import React from 'react';
import axios from "axios";

const CurrencyFromECB = () => axios.get('https://api.exchangerate.host/latest?base=PLN')
.then(response => console.log(response.data));
CurrencyFromECB();

export default CurrencyFromECB;