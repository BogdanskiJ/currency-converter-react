import "./style.css";

const SourceCurrency = ({ sourceCurrency, onSourceCurrencyChange, targetCurrencyLabel, sourceCurrencyValue, setSourceCurrencyValue, }) => (

  <label className="section__labelFlex">
    <div>
      <span className="section__label section__label--name">Wybierz pierwszą walutę: </span>
      <select
        value={sourceCurrency}
        onChange={onSourceCurrencyChange}
        className="section__label">
        <option>PLN</option>
        <option>USD</option>
        <option>EUR</option>
      </select>
    </div>
    <span className="section__label section__label--name"
        >Podaj kwotę: </span>
        <input
            className="section__label"
            type="number"
            value={sourceCurrencyValue}
            onChange={(event) => setSourceCurrencyValue(event.target.value)}
            name="kwota" min="0"
            step="any"
        />
  </label>
);

export default SourceCurrency;