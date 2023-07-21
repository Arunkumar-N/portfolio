import React, { ReactElement } from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
    width: calc(100% - 20px);
    margin: 0 10px;
    padding: 10px 0px;
    border-top: 2px solid rgba(0, 0, 0, 0.2);
`;

export default function Footer(): ReactElement {
    return (
        <FooterBlock> © 2023. All rights reserved by Arunkumar Ningamurthy</FooterBlock>
    )
};