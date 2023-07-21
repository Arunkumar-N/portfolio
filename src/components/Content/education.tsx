import React, { ReactElement } from 'react';
import { FlexBox, OrangeRedTitle } from '../../theme/styles';
import { ExperienceContainer, TitleBlock, SubTitleBlock } from './styles';

export default function Education(): ReactElement {
    return (
        <>
            <OrangeRedTitle>Education</OrangeRedTitle>
            <FlexBox>
                <ExperienceContainer>
                    <TitleBlock>Bachelor of Engineering</TitleBlock>
                    <SubTitleBlock>N M A M Institute of Technology, Nitte (2012 - 2016)</SubTitleBlock>
                </ExperienceContainer>
                <ExperienceContainer className='mb-left-lg'>
                    <TitleBlock>Pre University Education</TitleBlock>
                    <SubTitleBlock>St. Aloysius P.U College, Mangalore (2010 - 2012)</SubTitleBlock>
                </ExperienceContainer>
            </FlexBox>
        </>
    )
};