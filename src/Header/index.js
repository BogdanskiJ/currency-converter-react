import React from 'react';
import { HeaderJs, HeaderStyled } from "./styled";

const Header = ({ title }) => (
    <HeaderJs>
        <HeaderStyled>{title}</HeaderStyled>
    </HeaderJs>
);

export default Header;