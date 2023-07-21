import React, { ReactElement } from 'react';
import Profile from '../Profile/profile';
import styled from 'styled-components';
import Experience from './experience';
import { breakpoints } from '../../theme/breakpoints';
import Education from './education';
import CareerSummary from './careerSummary';
import Skills from './skills';

const ContentFrame = styled.div`
    max-width: 1280px;
    margin: 24px auto;
    @media (max-width: ${breakpoints.lg}) {
        margin: 24px 10px;
    }
`;

export default function Content(): ReactElement {
    return (
        <ContentFrame>
            <Profile/>
            <br/>
            <hr/>
            <CareerSummary/>
            <br/>
            <hr/>
            <Experience/>
            <br/>
            <hr/>
            <Skills/>
            <br/>
            <hr/>
            <Education/>
        </ContentFrame>
    )
};