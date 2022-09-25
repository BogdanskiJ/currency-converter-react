import { Input, Label, LabelFlex, Margin, Select } from "./styled";

const TargetCurrency = ({ targetCurrency, onTargetCurrencyChange, targetCurrencyValue, setTargerCurrencyValue, buttonForm }) => (
    <LabelFlex>
        <Margin>
            <Label>Wybierz drugą walutę: </Label>
            <Select
                value={targetCurrency}
                onChange={onTargetCurrencyChange}
            >
                <option>PLN</option>
                <option>USD</option>
                <option>EUR</option>
            </Select>
        </Margin>
        <div>
            {buttonForm}
        </div>

        <Margin>
            <Label>Otrzymana kwota: </Label>
            <Select
                as="input"
                type="number"
                value={targetCurrencyValue}
                onChange={(event) => setTargerCurrencyValue(event.target.value).toFixed(2)}
                name="przeliczonaKwota"
                placeholder="Kwota"
            />
        </Margin>
    </LabelFlex>
);

export default TargetCurrency; 
