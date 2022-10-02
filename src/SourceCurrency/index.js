import React, { useState } from "react";
import { Input, Label, LabelFlex, Margin, Select } from "./styled";
import { useCurrencyFromECB } from "../CurrencyFromECB";

const SourceCurrency = ({

  sourceCurrency, onSourceCurrencyChange, targetCurrencyLabel, sourceCurrencyValue, setSourceCurrencyValue }) => {

  const currencyFromECB = useCurrencyFromECB();

  return (
    <LabelFlex>
      <Margin>
        <Label>Wybierz pierwszą walutę: </Label>
        <Select
          value={sourceCurrency}
          onChange={onSourceCurrencyChange}>
          {Object.keys(currencyFromECB.rates).map((sourceCurrency) => (
            <option key={sourceCurrency}>
              {sourceCurrency}
            </option>
          ))}
        </Select>
      </Margin>
      <Margin>
        <Label>Podaj kwotę: </Label>
        <Select
          as="input"
          type="number"
          value={sourceCurrencyValue}
          onChange={(event) => setSourceCurrencyValue(event.target.value)}
          name="kwota" min="0"
          step="any"
          autoFocus
        />
      </Margin>
    </LabelFlex>
  )
};

export default SourceCurrency;


/*

 (Object.keys(currencyFromECB)).map(cash => (
            <option key={cash}>
              {cash}
            </option>
          ))

          */
