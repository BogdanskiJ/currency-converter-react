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
  const [targetCurrencyValue, setTargetCurrencyValue] = useState(0);

  const convertValue = () => {
    result(sourceCurrency, targetCurrency, sourceCurrencyValue, targetCurrencyValue);
  };

  const USD = 4.28;
  const EUR = 4.59;
  const PLN = 1.00;

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

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
