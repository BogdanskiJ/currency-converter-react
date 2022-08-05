import "./style.css";

const LabelSourceCurrency = ({ sourceCurrency, setSourceCurrency, onSelectSourceCurrencyChange }) => (

  <label className="section__labelFlex">
    <span className="section__label section__label--name">Wybierz pierwszą walutę: </span>
    <select
      value={sourceCurrency}
      onChange={onSelectSourceCurrencyChange}
      className="section__label">
      <option>PLN</option>
      <option>USD</option>
      <option>EUR</option>
    </select>
  </label>


);


export default LabelSourceCurrency; 