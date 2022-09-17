import React from "react";
import styled, { css } from "styled-components";

export const HeaderJs = styled.header`
    margin: auto;
    padding: 1px 10px;
    text-align: center;
    background-color: rgb(246, 246, 234);
    width: fit-content;
    border-radius: 20px;
    box-shadow: 5px 4px 6px 0px #B9BFB9;

    ${({ titleJs }) => titleJs && css`
    text - align: center;
    padding: 5px;
    margin: 5px;
    `};
`;