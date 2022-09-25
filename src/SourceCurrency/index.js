import React, { useState } from "react";
import { Input, Label, LabelFlex, Margin, Select } from "./styled";

const SourceCurrency = ({ sourceCurrency, onSourceCurrencyChange, targetCurrencyLabel, sourceCurrencyValue, setSourceCurrencyValue }) => (
  <LabelFlex>
    <Margin>
      <Label>Wybierz pierwszą walutę: </Label>
      <Select
        value={sourceCurrency}
        onChange={onSourceCurrencyChange}>
        <option>PLN</option>
        <option>USD</option>
        <option>EUR</option>
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