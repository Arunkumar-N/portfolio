import styled from 'styled-components';
import { breakpoints } from './breakpoints';

export const lightShadow = 'rgba(0, 0, 0, 0.2)';

export const Card = styled.div`
    background: linear-gradient(to top, white, var(--aliceBlue));
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
    border-radius:  5px;
    border: 1px solid var(--lightgrey);
    width: -webkit-fill-available;
`;

export const FlexBox = styled.div<{ $isColumn?: boolean; }>`
    display: flex;
    flex-flow: ${props => props.$isColumn ? "column" : "row"};;
    text-align: center;
    justify-content: space-between;
    @media (max-width: ${breakpoints.sm}) {
        flex-flow: column;
    }
`;
export const OrangeRedSpan = styled.span`
    color: var(--orangeRed)
`;
export const OrangeRedTitle = styled.div`
    text-align: left;
    font-size: 1.5em;
    font-weight: bold;
    color: var(--orangeRed)
`;
export const GreySpan = styled.span`
    color: var(--grey)
`;

export const Icon = styled.span`
    border: 3px solid var(--lightgrey);
    border-radius: 0.375rem;
    box-shadow: 0px 5px 10px #b3b2b2, -1px -4px 9px #b3b2b2, inset 1px 6px 9px -10px #b3b2b2, inset -7px -8px 8px -8px #b3b2b2;
    color: var(--aliceBlue);
    background-color: #b3b2b2;
    cursor: pointer;
    justify-content: center;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    padding: 10px;
    margin: 5px;
    a {
        color: var(--aliceBlue);  
    }
`;