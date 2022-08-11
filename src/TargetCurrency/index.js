
const TargetCurrency = ({ targetCurrency, onTargetCurrencyChange, targetCurrencyValue, setTargerCurrencyValue }) => (
    <label className="section__labelFlex">
        <div>
            <span className="section__label section__label--name">Wybierz drugą walutę: </span>
            <select
                value={targetCurrency}
                onChange={onTargetCurrencyChange}
                className="section__label">
                <option>PLN</option>
                <option>USD</option>
                <option>EUR</option>
            </select>
        </div>
        <span className="section__label section__label--name">Otrzymana kwota: </span>
        <input
            className="section__label"
            type="number"
            value={targetCurrencyValue}
            onChange={(event) => setTargerCurrencyValue(event.target.value).toFixed(2)}
            name="przeliczonaKwota"
            placeholder="Kwota"
        />
    </label>
);

export default TargetCurrency; 
