import styled from 'styled-components';
import { spacing } from '../../theme/spacing';
import { Card, GreySpan } from '../../theme/styles';

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
export const ExperienceContainer = styled(Card)`
    margin-top: ${spacing.md};
    padding: ${spacing.sm};
`;