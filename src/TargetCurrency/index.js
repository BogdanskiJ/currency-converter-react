import ButtonForm from "../ButtonForm";
import "./style.css";
const TargetCurrency = ({ targetCurrency, onTargetCurrencyChange, targetCurrencyValue, setTargerCurrencyValue, buttonForm }) => (
    <label className="targetCurrency__labelFlex">
        <div className="targetCurrency__margin">
            <span className="targetCurrency__label targetCurrency__label--name">Wybierz drugą walutę: </span>
            <select
                value={targetCurrency}
                onChange={onTargetCurrencyChange}
                className="targetCurrency__label">
                <option>PLN</option>
                <option>USD</option>
                <option>EUR</option>
            </select>
        </div>
        <div>
            {buttonForm}
        </div>


        <div className="targetCurrency__margin">
            <span className="targetCurrency__label targetCurrency__label--name">Otrzymana kwota: </span>
            <input
                className="targetCurrency__label"
                type="number"
                value={targetCurrencyValue}
                onChange={(event) => setTargerCurrencyValue(event.target.value).toFixed(2)}
                name="przeliczonaKwota"
                placeholder="Kwota"
            />
        </div>
    </label>
);

export default TargetCurrency; 
