import React, { useState } from "react";
import TargetCurrencyValue from "../TargetCurrencyValue";
import "./style.css";

const onFormSubmit = (event) => {
    event.preventDefault();
};

const Fieldset = ({ labelSourceCurrency, sourceCurrencyValue, labelTargetCurrency, buttonForm, targetCurrencyValue}) => (
    <section>
        <h2 className="section__header">Przelicz swoją walutę!</h2>
        <form className="section__form" action="/stronadocelowa" method="post"
            onSubmit={onFormSubmit}>
            <p className="section__field section__fieldset">
                {labelSourceCurrency}
            </p>
            <p className="section__field">
                {sourceCurrencyValue}
            </p>
            <p className="section__field">
                {labelTargetCurrency}
            </p>
            <p>
                {buttonForm}
            </p>
            <p>
                {targetCurrencyValue}
            </p>
        </form>
    </section>
    
);
export default Fieldset;