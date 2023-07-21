import React, { ReactElement } from 'react';
import { FlexBox, GreySpan, Icon, OrangeRedSpan } from '../../theme/styles';
import styled from 'styled-components';
import { breakpoints } from '../../theme/breakpoints';
import { spacing } from '../../theme/spacing';

const Image = styled.img`
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
    border: 3px solid var(--lightgrey);
    height: 300px;
    @media (max-width: ${breakpoints.lg}) {
        height: 200px;
        width: 200px;
        margin: auto;
        border-radius: 50%;
    }
`;

const ProfileCOntent = styled.div`
    float: left;
    text-align: left;
    margin-left: ${spacing.sm};
    @media (max-width: ${breakpoints.lg}) {
        margin-left: unset;
    }
`;
const ProfileSummary = styled.p`
    text-align: justify;
`;
const H2 = styled.h2`
    margin: auto;
    font-size: 2rem;
    @media (max-width: ${breakpoints.lg}) {
        text-align: center;
    } 
`;
const H1 = styled.h1`
    margin: auto;
    font-size: 3rem;
    @media (max-width: ${breakpoints.lg}) {
        text-align: center;
    }
`;

export default function Profile(): ReactElement {
    return (
        <FlexBox>
            <Image src={'assets/profile-2.png'} alt="logo" />
            <ProfileCOntent>
                <H1>Hi, I'm <OrangeRedSpan>Arunkumar N</OrangeRedSpan></H1>
                <H2><GreySpan>Frontend developer</GreySpan></H2>
                <ProfileSummary>
                    Energetic Software Engineer with 7 years’ experience developing code for high-volume businesses. Have Good
                    experience on UI/UX development with angular and backend development with Java. Involved in developing a
                    single platform website for all applications, team, management and clients to track the system process, job
                    status and users with real time analytics. Awarded Best full stack developer for Q2 in 2018 for innovative work
                    done on analytics tool.
                </ProfileSummary>
                <GreySpan>Find me in</GreySpan>
                <Icon>
                    <a href="mailto:arunkumar.frnd.n@gmail.com">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg>
                    </a>
                </Icon>
                <Icon>
                    <a href="tel:0434154070">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z"></path></svg>
                    </a>
                </Icon>
                <Icon>
                    <a href="https://www.linkedin.com/in/arunkumar-n-348194107">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                    </a>
                </Icon>
            </ProfileCOntent>
        </FlexBox>
    )
};