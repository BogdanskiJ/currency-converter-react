import React, { useState } from "react";
import { Input, Label, LabelFlex, Margin, Select } from "./styled";
import CurrencyFromECB, { currencyFromECB, ratesObject } from "../CurrencyFromECB";

const SourceCurrency = ({ sourceCurrency, onSourceCurrencyChange, targetCurrencyLabel, sourceCurrencyValue, setSourceCurrencyValue, currencyFromECB }) => (
  <LabelFlex>
    <Margin>
      <Label>Wybierz pierwszą walutę: </Label>
      <Select
        value={currencyFromECB}
        onChange={onSourceCurrencyChange}>
        {
          (Object.keys(CurrencyFromECB.rates)).map(cash => (
            <option key={cash}>
              {cash}
            </option>
          ))
        }
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
);

export default SourceCurrency;