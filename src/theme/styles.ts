import styled from 'styled-components';
import { breakpoints } from './breakpoints';
import { spacing } from './spacing';

export const Card = styled.div`
    background: linear-gradient(to top, white, var(--aliceBlue));
    box-shadow: 1px 1px 3px 1px var(--shadowColor);
    border-radius:  5px;
    border: 1px solid var(--lightgrey);
    width: -webkit-fill-available;
`;

export const Divider = styled.hr`
  margin: ${spacing.md} 0;
  box-shadow: 0 3px 3px 0 var(--shadowColor);
`;

export const FlexBox = styled.div<{ $isColumn?: boolean; }>`
    display: flex;
    flex-flow: ${props => props.$isColumn ? "column" : "row"};;
    text-align: center;
    justify-content: space-between;
    @media (max-width: ${breakpoints.xl}) {
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
    box-shadow: 0px 4px 4px var(--shadowColor2), -1px -3px 4px var(--shadowColor2), inset 3px 3px 3px -3px var(--shadowColor2), inset -5px -4px 4px -4px var(--shadowColor2);
    color: var(--aliceBlue);
    background-color: var(--shadowColor2);
    cursor: pointer;
    justify-content: center;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    padding: 4px;
    margin: 4px;
    a {
        color: var(--aliceBlue);
        width: inherit;
    }
`;

export const TitleBlock = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    text-align: left;
`;
export const SubTitleBlock = styled(GreySpan)`
    margin-top: ${spacing.xsm};
    font-size: 1em;
    display: block;
    text-align: left;
`;
export const ContentBlock = styled.div`
    margin-top: ${spacing.sm};
    text-align: left;
`;
export const CardContainer = styled(Card)`
    margin-top: ${spacing.md};
    padding: ${spacing.sm};
`;
export const IconImage = styled.img`
  width: inherit;
`;