import React, { ReactElement } from 'react';
import Profile from '../Profile/profile';
import styled from 'styled-components';

const ContentFrame = styled.div`
    max-width: 1280px;
    margin: 24px auto;
`;

export default function Content(): ReactElement {
    return (
        <ContentFrame>
            <Profile/>
        </ContentFrame>
    )
};