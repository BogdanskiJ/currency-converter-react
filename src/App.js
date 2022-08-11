import React, { useState } from "react";
import SourceCurrency from "./SourceCurrency";
import TargetCurrency from "./TargetCurrency";
import ButtonForm from "./ButtonForm";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";

function App() {

  const [sourceCurrency, setSourceCurrency] = useState("PLN");
  const onSourceCurrencyChange = ({ target }) => setSourceCurrency(target.value);
  const [targetCurrency, setTargetCurrency] = useState("PLN");
  const onTargetCurrencyChange = ({ target }) => setTargetCurrency(target.value);
  const [sourceCurrencyValue, setSourceCurrencyValue] = useState(0);
  const [targetCurrencyValue, setTargetCurrencyValue] = useState(0);

  const convertValue = () => {
    result(sourceCurrency, targetCurrency, sourceCurrencyValue, targetCurrencyValue);
  };

  const USD = 4.28;
  const EUR = 4.59;
  const PLN = 1.00;

  const result = (sourceCurrency, targetCurrency, sourceCurrencyValue, targetCurrencyValue) => {
    setTargetCurrencyValue(targetCurrencyValue => {
      switch (sourceCurrency) {
        case "PLN":
          switch (targetCurrency) {
            case "PLN":
              setTargetCurrencyValue((sourceCurrencyValue * (PLN / PLN)).toFixed(2));
              break;
            case "USD":
              setTargetCurrencyValue((sourceCurrencyValue * (PLN / USD)).toFixed(2));
              break;
            default:
              setTargetCurrencyValue((sourceCurrencyValue * (PLN / EUR)).toFixed(2));
          }
          break;
        case "USD":
          switch (targetCurrency) {
            case "PLN":
              setTargetCurrencyValue((sourceCurrencyValue * (USD / PLN)).toFixed(2));
              break;
            case "USD":
              setTargetCurrencyValue((sourceCurrencyValue * (PLN / PLN)).toFixed(2));
              break;
            default:
              setTargetCurrencyValue((sourceCurrencyValue * (USD / EUR)).toFixed(2));
          }
          break;
        default:
          switch (targetCurrency) {
            case "PLN":
              setTargetCurrencyValue((sourceCurrencyValue * (EUR / PLN)).toFixed(2));
              break;
            case "USD":
              setTargetCurrencyValue((sourceCurrencyValue * (EUR / USD)).toFixed(2));
              break;
            default:
              setTargetCurrencyValue((sourceCurrencyValue * (PLN / PLN)).toFixed(2));
          }
          break;
      }
    }
    )
  }

  return (
    <Container>
      <Header title="💰 KALKULATOR WALUT" />
      <Section
        sourceCurrencySection={
          <SourceCurrency
            sourceCurrency={sourceCurrency}
            setSourceCurrency={setSourceCurrency}
            sourceCurrencyValue={sourceCurrencyValue}
            setSourceCurrencyValue={setSourceCurrencyValue}
            onSourceCurrencyChange={onSourceCurrencyChange}
          />}
        targetCurrencySection={
          <TargetCurrency
            targetCurrency={targetCurrency}
            setTargetCurrency={setTargetCurrency}
            targetCurrencyValue={targetCurrencyValue}
            setTargetCurrencyValue={setTargetCurrencyValue}
            onTargetCurrencyChange={onTargetCurrencyChange}
          />}
        buttonForm={
          <ButtonForm
            convertValue={convertValue}
            sourceCurrencyValue={sourceCurrencyValue}
          />}
      />
    </Container >
  );
}

export default App;