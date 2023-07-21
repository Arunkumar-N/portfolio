import React, { ReactElement } from 'react';

import { FlexBox, OrangeRedTitle } from '../../theme/styles';
import { ContentBlock, ExperienceContainer, SubTitleBlock, TitleBlock } from './styles';

export default function Experience(): ReactElement {
    return (
        <>
            <OrangeRedTitle>Experience</OrangeRedTitle>
            <FlexBox $isColumn>
                <ExperienceContainer>
                    <TitleBlock>Project Lead</TitleBlock>
                    <SubTitleBlock>Tech Mahindra Limited (Nov 2019 - Present)</SubTitleBlock>
                    <ContentBlock>
                        Responsibilities will be loaded here.........
                    </ContentBlock>
                </ExperienceContainer>
                <ExperienceContainer>
                    <TitleBlock>Specialist Software Engineer</TitleBlock>
                    <SubTitleBlock>Societe Generale Global Solutions Centre Pvt. Ltd. (Aug 2016 - Nov 2019)</SubTitleBlock>
                    <ContentBlock>
                        Responsibilities will be loaded here.......
                    </ContentBlock>
                </ExperienceContainer>
            </FlexBox>
        </>
    )
};