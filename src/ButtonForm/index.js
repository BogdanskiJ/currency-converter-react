import React from "react";
import { Button, Buttonn } from "./styled";

const ButtonForm = ({ convertValue }) => (
    <Buttonn
        onClick={() => convertValue()}
    >
        Przelicz walutę!
    </Buttonn>
);

export default ButtonForm; 