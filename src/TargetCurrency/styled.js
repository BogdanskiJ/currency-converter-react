import styled from "styled-components";

export const LabelFlex = styled.label`
    @media (max-width: 500px) {
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: auto;
    
}
`;

export const Margin = styled.div`
    margin: 10px;
    @media (max-width: 500px) {
        margin: 5px;
    
}
`;

export const Label = styled.label`
    max-width: 250px;
    display: inline-block;
    margin-right: 5px;
    max-width: 70%;
    text-align: center;
    border-radius: 20px;
    border: none;
    font-size: 1.1em;
    line-height: 1.2;
`;

export const Select = styled.select`
    max-width: 250px;
    display: inline-block;
    margin-right: 5px;
    max-width: 70%;
    text-align: center;
    border: 1px rgb(0, 0, 0) solid;
    border-radius: 20px;
`;