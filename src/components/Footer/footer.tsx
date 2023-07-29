import React, { ReactElement } from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
    width: 100%;
    padding: 10px 0px;
    box-shadow: 0 -3px 3px 0 var(--shadowColor);
`;

export default function Footer(): ReactElement {
    return (
        <FooterBlock> © {new Date().getFullYear()} All rights reserved by Arunkumar Ningamurthy</FooterBlock>
    )
};