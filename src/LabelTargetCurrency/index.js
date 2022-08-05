import "./style.css";

const LabelTargetCurrency = ({ targetCurrency, setTargetCurrency, onSelectTargetCurrencyChange }) => (

  <label className="section__labelFlex">
    <span className="section__label section__label--name">Wybierz pierwszą walutę: </span>
    <select
      value={targetCurrency}
      onChange={onSelectTargetCurrencyChange}
      className="section__label">
      <option>PLN</option>
      <option>USD</option>
      <option>EUR</option>
    </select>
  </label>
);


export default LabelTargetCurrency; 