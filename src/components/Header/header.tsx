import React, { ReactElement } from 'react';
import styled from 'styled-components';
const HeaderBlock = styled.div`
    width: calc(100% - 10px);
    height: 50px;
    margin: 0 10px;
    border-bottom: 1px solid var(--grey);
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
    height: calc(100% - 8px);
    float: left;
    margin: 4px;
    border-radius: 50%;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
`;

export default function Header(): ReactElement {
    return (
        <HeaderBlock>
            <Image src={'favicon_io/apple-touch-icon.png'}/>
        </HeaderBlock>
    )
};
