import React from 'react'
import styled from 'styled-components';

export const lightShadow = 'rgba(0, 0, 0, 0.2)';

export const Card = styled.div`
    background: linear-gradient(to top, white, var(--aliceBlue));
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
    border-radius:  5px;
`;

export const FlexBox = styled.div`
    display: flex;
    flex-flow: row;
    text-align: center;
`;
export const OrangeRedSpan = styled.span`
    color: var(--orangeRed)
`;
export const GreySpan = styled.span`
    color: var(--grey)
`;

export const Icon = styled.span`
    --tw-bg-opacity: 0.25;
    --tw-text-opacity: 1;
    align-items: center;
    background-color: rgb(0 0 0/var(--tw-bg-opacity));
    border-radius: 0.375rem;
    box-shadow: 0 0 #0000,0 0 #0000,var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
    color: var(--aliceBlue);
    cursor: pointer;
    justify-content: center;
    display: block;
    width: fit-content;
    text-align: center;
    padding: 10px;
    a {
        color: var(--aliceBlue);  
    }
`;