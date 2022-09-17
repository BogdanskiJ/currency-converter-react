import styled from "styled-components";

export const Buttonn = styled.button`
    width: 50%;
    border-radius: 10px;
    border: 1px rgb(0, 0, 0) solid;
    background-color: hsl(173, 49%, 51%);
    color: white;
    font-weight: 500;

    @media (max-width: 500px) {
        width: 100%;
        padding: 5px;
        };

    &:hover {
        background-color: hsl(173, 49%, 41%);
        transform: scale(1.05);
        transition: 0.5s;
    };

    &:active {  
        background-color: hsl(173, 49%, 31%);
    };
`;


