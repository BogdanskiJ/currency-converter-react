import React, { useState } from "react";
import "./style.css";

const onFormSubmit = (event) => {
    event.preventDefault();
};

const Section = ({ sourceCurrencySection, targetCurrencySection, buttonForm, timeAndDate }) => (
    <section>
        <h2 className="section__header">Przelicz swoją walutę!</h2>
        <form className="section__form" action="/stronadocelowa" method="post"
            onSubmit={onFormSubmit}>
            <p className="section__field section__fieldset">
                {timeAndDate}
                {sourceCurrencySection}
                {targetCurrencySection}
                {buttonForm}
            </p>
        </form>
    </section>
);
export default Section;