import React, { useState } from "react";
import SourceCurrency from "./SourceCurrency";
import TargetCurrency from "./TargetCurrency";
import ButtonForm from "./ButtonForm";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import TimeAndDate from "./TimeAndDate";
import { useCurrencyFromECB } from "./CurrencyFromECB";
import Fail from "./Fail";
import Loading from "./Loading";
function App() {

  const [sourceCurrency, setSourceCurrency] = useState("PLN");
  const onSourceCurrencyChange = ({ target }) => setSourceCurrency(target.value);
  const [targetCurrency, setTargetCurrency] = useState("PLN");
  const onTargetCurrencyChange = ({ target }) => setTargetCurrency(target.value);
  const [sourceCurrencyValue, setSourceCurrencyValue] = useState(0);
  const [targetCurrencyValue, setTargetCurrencyValue] = useState(0);

  const currencyFromECB = useCurrencyFromECB();

  const convertValue = () => {
    result(sourceCurrency, targetCurrency, sourceCurrencyValue, setTargetCurrencyValue);
  };

  const result = (sourceCurrency, targetCurrency, sourceCurrencyValue, setTargetCurrencyValue) => {

    const sourceRates = currencyFromECB.rates[sourceCurrency];
    const targetRates = currencyFromECB.rates[targetCurrency];
    const targetValue = () => {
      setTargetCurrencyValue((targetRates * sourceCurrencyValue) / sourceRates);
    }
    targetValue();
  };


  return (
    <Container>
      <Header title="💰 KALKULATOR WALUT" />
      {currencyFromECB.state === "loading"
        ? (
          <Section
            timeAndDate={<TimeAndDate />}
            loading={<Loading />}
          />
        )
        : (currencyFromECB.state === "fail"
          ? (
          <Section
            timeAndDate={<TimeAndDate />}
            loading={<Fail />}
          />
          )
          : (<Section
            timeAndDate={
              <TimeAndDate />}
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
                buttonForm={
                  <ButtonForm
                    convertValue={convertValue}
                    sourceCurrencyValue={sourceCurrencyValue}
                  />}
              />}
          />))
      }
    </Container >
  );
}

export default App;