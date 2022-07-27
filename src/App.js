import React, { useState } from "react";
import LabelSourceCurrency from "./LabelSourceCurrency";
import LabelTargetCurrency from "./LabelTargetCurrency";
import SourceCurrencyValue from "./SourceCurrencyValue";

function App() {

  const [sourceCurrency, setSourceCurrency] = useState("PLN");
  const onSelectSourceCurrencyChange = ({ target }) => setSourceCurrency(target.value);

  const [targetCurrency, setTargetCurrency] = useState("PLN");
  const onSelectTargetCurrencyChange = ({ target }) => setTargetCurrency(target.value);

  const [sourceCurrencyValue, setSourceCurrencyValue] = useState(0);
  const onChangeCurrencyValue = ({ target }) => setSourceCurrencyValue(target.value);



  <header className="body__header">
    <h1>💰 KALKULATOR WALUT</h1>
  </header>

  return (

    <main>
      <section>
        <h2 className="section__sectionHeader">Przelicz swoją walutę!</h2>
        <form className="section__form" action="/stronadocelowa" method="post">
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
                onChangeCurrencyValue={onChangeCurrencyValue}
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
            <p>
              <label>
                <span className="section__label section__label--name">Otrzymana kwota: </span>
                <input
                  className="section__label" type="number" name="przeliczonaKwota"
                  placeholder="Kwota" min="0" step="any" readOnly
                />
              </label>
            </p>
          </fieldset>
        </form>

      </section>
    </main>
  );

}

export default App;
