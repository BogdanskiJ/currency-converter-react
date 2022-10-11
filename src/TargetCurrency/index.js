import { Input, Label, LabelFlex, Margin, Select, LabelExchangeRate } from "./styled";

import { useCurrencyFromECB } from "../CurrencyFromECB";

const TargetCurrency = ({ targetCurrency, onTargetCurrencyChange, targetCurrencyValue, setTargetCurrencyValue, buttonForm }) => {

    const currencyFromECB = useCurrencyFromECB();
    
    return (
        <LabelFlex>
            <Margin>
                <Label>Wybierz drugą walutę: </Label>
                <Select
                    value={targetCurrency}
                    onChange={onTargetCurrencyChange}>
                    {Object.keys(currencyFromECB.rates).map((targetCurrency) => (
                        <option key={targetCurrency}>
                            {targetCurrency}
                        </option>
                    ))}
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
                    value={targetCurrencyValue.toFixed(2)}
                    onChange={(event) => setTargetCurrencyValue(event.target.value)}
                    name="przeliczonaKwota"
                    placeholder="Kwota"
                />
            </Margin>
            <LabelExchangeRate>{`Kurs aktualny na dzień:  ${currencyFromECB.date}`}</LabelExchangeRate>
        </LabelFlex>

    )

};

export default TargetCurrency; 
