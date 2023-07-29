import React, { ReactElement } from "react";
import { FlexBox, GreySpan, Icon, IconImage, OrangeRedSpan } from "../../theme/styles";
import styled from "styled-components";
import { breakpoints } from "../../theme/breakpoints";
import { spacing } from "../../theme/spacing";
import { ASSETS_PATH, CONTACTS, SKILLS } from "../../helpers/constants";

const Image = styled.img`
  border-radius: 10px;
  box-shadow: 0 0 10px 2px var(--shadowColor);
  border: 3px solid var(--lightgrey);
  height: 300px;
  @media (max-width: ${breakpoints.xl}) {
    height: 150px;
    width: 150px;
    margin: auto;
    border-radius: 50%;
  }
`;

const ProfileContent = styled.div`
  float: left;
  text-align: left;
  margin-left: ${spacing.sm};
  @media (max-width: ${breakpoints.xsm}) {
    margin-left: unset;
  }
`;
const ProfileSummary = styled.p`
  text-align: justify;
`;
const IconSummary = styled.div`
  text-align: left;
  margin: 5px;
  font-size: 1rem;
  line-height: 1.5rem;
`;
const LeftALignDiv = styled.div`
  text-align: left;
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
  line-height: 3rem;
  @media (max-width: ${breakpoints.lg}) {
    text-align: center;
  }
`;

export default function Profile(): ReactElement {
  var startDate = new Date("08-08-2016");
  var endDate = new Date();
  var startMonth = startDate.getFullYear() * 12 + startDate.getMonth();
  var endMonth = endDate.getFullYear() * 12 + endDate.getMonth();
  var intervalYear = Math.floor((endMonth - startMonth) / 12);
  var intervalMonth = (endMonth - startMonth) % 12;
  return (
    <FlexBox>
      <Image src={"assets/Profile.jpg"} alt="logo" />
      <ProfileContent>
        <H1>
          Hi, I'm <OrangeRedSpan>Arunkumar N</OrangeRedSpan>
        </H1>
        <H2>
          <GreySpan>Frontend Developer</GreySpan>
        </H2>
        <ProfileSummary>
          Energetic Software Engineer with {intervalYear} years’{" "}
          {intervalMonth > 0 ? intervalMonth + " months’" : ""} experience
          developing code for high-volume businesses. Have Good experience on
          UI/UX development with angular, react and backend development with
          Java. Involved in developing a single platform website for all
          applications, team, management and clients to track the system
          process, job status and users with real time analytics. Awarded Best
          full stack developer for Q2 in 2018 for innovative work done on
          analytics tool.
        </ProfileSummary>
        <FlexBox>
          <FlexBox $isColumn>
            <IconSummary>
              <GreySpan>Find me in</GreySpan>
            </IconSummary>
            <LeftALignDiv>
              {CONTACTS.map((contact, index) => (
                <Icon key={index}>
                <a href={contact.href}>
                  <IconImage src={ASSETS_PATH + contact.src} alt={contact.alt} />
                </a>
              </Icon>
              ))}
            </LeftALignDiv>
          </FlexBox>
          <FlexBox $isColumn>
            <IconSummary>
              <GreySpan>Skills</GreySpan>
            </IconSummary>
            <LeftALignDiv>
              {SKILLS.map((skill, index) => (
                <Icon key={index}>
                  <IconImage src={ASSETS_PATH + skill.src} alt={skill.alt} />
                </Icon>
              ))}
            </LeftALignDiv>
          </FlexBox>
        </FlexBox>
      </ProfileContent>
    </FlexBox>
  );
}
