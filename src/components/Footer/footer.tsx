import React, { ReactElement } from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
    width: calc(100% - 10px);
    margin: 0 10px;
    padding: 10px 0px;
    border-top: 1px solid var(--grey);
    box-shadow: 0 -3px 1px -1px rgba(0, 0, 0, 0.2);
`;

export default function Footer(): ReactElement {
    return (
        <FooterBlock> © 2023. All rights reserved by Arunkumar Ningamurthy</FooterBlock>
    )
};