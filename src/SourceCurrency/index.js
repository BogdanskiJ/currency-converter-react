import React, { useState } from "react";
import "./style.css";



const SourceCurrency = ({ sourceCurrency, onSourceCurrencyChange, targetCurrencyLabel, sourceCurrencyValue, setSourceCurrencyValue }) => (
  <label className="sourceCurrency__labelFlex">
    <div className="sourceCurrency__margin">
      <span className="sourceCurrency__label sourceCurrency__label--name">Wybierz pierwszą walutę: </span>
      <select
        value={sourceCurrency}
        onChange={onSourceCurrencyChange}
        className="sourceCurrency__label">
        <option>PLN</option>
        <option>USD</option>
        <option>EUR</option>
      </select>
    </div>
    <div className="sourceCurrency__margin">
      <span className="sourceCurrency__label sourceCurrency__label--name"
      >Podaj kwotę: </span>
      <input
        className="sourceCurrency__label"
        type="number"
        value={sourceCurrencyValue}
        onChange={(event) => setSourceCurrencyValue(event.target.value)}
        name="kwota" min="0"
        step="any"
        autoFocus
      />
    </div>
  </label>
);

export default SourceCurrency;