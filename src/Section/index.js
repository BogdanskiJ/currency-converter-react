import React, { useState } from "react";
import { SectionHeader, SectionForm, SectionField } from "./styled";


const onFormSubmit = (event) => {
    event.preventDefault();
};

const Section = ({ sourceCurrencySection, targetCurrencySection, buttonForm, timeAndDate, loading }) => (
    <section>
        <SectionHeader>Przelicz swoją walutę!</SectionHeader>
        <SectionForm action="/stronadocelowa" method="post"
            onSubmit={onFormSubmit}>
            <SectionField>
                {timeAndDate}
                {sourceCurrencySection}
                {targetCurrencySection}
                {buttonForm}
                {loading}
            </SectionField>
        </SectionForm>
    </section>
);
export default Section;