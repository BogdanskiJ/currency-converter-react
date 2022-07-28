import React, { useState } from "react";
import LabelSourceCurrency from "./LabelSourceCurrency";
import LabelTargetCurrency from "./LabelTargetCurrency";
import SourceCurrencyValue from "./SourceCurrencyValue";
import TargetCurrencyValue from "./TargetCurrencyValue";
import ButtonForm from "./ButtonForm";


function App() {

  const [sourceCurrency, setSourceCurrency] = useState("PLN");
  const onSelectSourceCurrencyChange = ({ target }) => setSourceCurrency(target.value);

  const [targetCurrency, setTargetCurrency] = useState("PLN");
  const onSelectTargetCurrencyChange = ({ target }) => setTargetCurrency(target.value);

  const [sourceCurrencyValue, setSourceCurrencyValue] = useState(0);
  //const onChangeCurrencyValue = ({ target }) => setSourceCurrencyValue(target.value);

  const [targetCurrencyValue, setTargetCurrencyValue] = useState("");


  const convertValue = () => {
    setTargetCurrencyValue(targetCurrencyValue => 2*sourceCurrencyValue);
    
  };


  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  // const [result, setResult] = useState(0);
  // const onChangeCurrencyValue = ({ target }) => setSourceCurrencyValue(target.value);

  const result = (sourceCurrency, targetCurrency, sourceCurrencyValue, targetCurrencyValue) => {
    setTargetCurrencyValue(targetCurrencyValue => 2 * sourceCurrencyValue)
    return targetCurrencyValue;
  }


  return (

    <main>
      <section>
        <h2 className="section__sectionHeader">Przelicz swoją walutę!</h2>
        <form className="section__form" action="/stronadocelowa" method="post"
          onSubmit={onFormSubmit}
        >
          <fieldset className="section__fieldset">
            <p>
              <LabelSourceCurrency
                sourceCurrency={sourceCurrency}
                setSourceCurrency={setSourceCurrency}
                onSelectSourceCurrencyChange={onSelectSourceCurrencyChange}
              />
            </p>

            <p className="section__field">
              <SourceCurrencyValue
                sourceCurrencyValue={sourceCurrencyValue}
                setSourceCurrencyValue={setSourceCurrencyValue}
              />
            </p>


          </fieldset>
          <fieldset className="section__fieldset">
            <p>
              <LabelTargetCurrency
                targetCurrency={targetCurrency}
                setTargetCurrency={setTargetCurrency}
                onSelectTargetCurrencyChange={onSelectTargetCurrencyChange}
              />
            </p>
            <ButtonForm
              convertValue={convertValue}
              sourceCurrencyValue={sourceCurrencyValue}
            />
            <p>
              <TargetCurrencyValue
                targetCurrencyValue={targetCurrencyValue}
                setTargetCurrencyValue={setTargetCurrencyValue}
              />
            </p>
          </fieldset>
        </form>
      </section>
    </main>
  );

}

export default App;
