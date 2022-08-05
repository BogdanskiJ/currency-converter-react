import "./style.css";

const TargetCurrencyValue = ({ targetCurrencyValue, setTargerCurrencyValue }) => (
    <label className="section__labelFlex">
        <span className="section__label section__label--name">Otrzymana kwota: </span>
        <input
            className="section__label"
            type="number"
            name="przeliczonaKwota"
            placeholder="Kwota"
            onChange={(event) => setTargerCurrencyValue(event.target.value).toFixed(2)}
            value={targetCurrencyValue}
        />
    </label>
);

export default TargetCurrencyValue; 
