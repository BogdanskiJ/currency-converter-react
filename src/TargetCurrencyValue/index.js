import "./style.css";

const TargetCurrencyValue = ({ targetCurrencyValue, setTargerCurrencyValue }) => (
    <label>
        <span className="section__label section__label--name">Otrzymana kwota: </span>
        <input
            className="section__label"
            type="number"
            name="przeliczonaKwota"
            placeholder="Kwota"
            value={targetCurrencyValue}
            onChange={(event) => setTargerCurrencyValue(event.target.value)}
        />
    </label>
);

export default TargetCurrencyValue; 
