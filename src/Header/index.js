import React from 'react';
import { HeaderJs, titleJs } from "./styled";

const Header = ({ title }) => (
    <HeaderJs>
        <h1 titleJs>{title}</h1>
    </HeaderJs>
);

export default Header;