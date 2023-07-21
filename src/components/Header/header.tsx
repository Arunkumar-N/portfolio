import React, { ReactElement } from 'react';
import styled from 'styled-components';
const HeaderBlock = styled.div`
    width: calc(100% - 20px);
    height: 50px;
    margin: 0 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
    height: calc(100% - 8px);
    float: left;
    margin: 4px;
    border-radius: 50%;
`;

export default function Header(): ReactElement {
    return (
        <HeaderBlock>
            <Image src={'favicon_io/apple-touch-icon.png'}/>
        </HeaderBlock>
    )
};
