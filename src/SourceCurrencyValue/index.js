import "./style.css";

const SourceCurrencyValue = ({ sourceCurrencyValue, setSourceCurrencyValue }) => (
    <label>
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

export default SourceCurrencyValue; 