import React, { ReactElement } from "react";
import { FlexBox, GreySpan, Icon, OrangeRedSpan } from "../../theme/styles";
import styled from "styled-components";
import { breakpoints } from "../../theme/breakpoints";
import { spacing } from "../../theme/spacing";

const Image = styled.img`
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border: 3px solid var(--lightgrey);
  height: 300px;
  @media (max-width: ${breakpoints.xl}) {
    height: 200px;
    width: 200px;
    margin: auto;
    border-radius: 50%;
  }
`;
const IconImage = styled.img`
  width: inherit;
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
const SKILLS = [
  { src: "assets/html.png", alt: "HTML" },
  { src: "assets/js.png", alt: "JS" },
  { src: "assets/css.png", alt: "CSS" },
  { src: "assets/angularjs.svg", alt: "Angular" },
  { src: "assets/react.svg", alt: "React" },
  { src: "assets/java.svg", alt: "Java" },
  { src: "assets/git.png", alt: "Git" },
  { src: "assets/jenkins.png", alt: "Jenkins" },
];

export default function Profile(): ReactElement {
  var startDate = new Date("08-08-2016");
  var endDate = new Date();
  var startMonth = startDate.getFullYear() * 12 + startDate.getMonth();
  var endMonth = endDate.getFullYear() * 12 + endDate.getMonth();
  var intervalYear = Math.floor((endMonth - startMonth) / 12);
  var intervalMonth = (endMonth - startMonth) % 12;
  return (
    <FlexBox>
      <Image src={"assets/profile-2.png"} alt="logo" />
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
              <Icon>
                <a href="mailto:arunkumar.frnd.n@gmail.com">
                  <IconImage src={"assets/email.png"} alt="html" />
                </a>
              </Icon>
              <Icon>
                <a href="tel:0434154070">
                  <IconImage src={"assets/phone.png"} alt="html" />
                </a>
              </Icon>
              <Icon>
                <a href="https://www.linkedin.com/in/arunkumar-n-348194107">
                  <IconImage src={"assets/linked-in.png"} alt="html" />
                </a>
              </Icon>
            </LeftALignDiv>
          </FlexBox>
          <FlexBox $isColumn>
            <IconSummary>
              <GreySpan>Skills</GreySpan>
            </IconSummary>
            <LeftALignDiv>
              {SKILLS.map((skill) => (
                <Icon>
                  <IconImage src={skill.src} alt={skill.alt} />
                </Icon>
              ))}
            </LeftALignDiv>
          </FlexBox>
        </FlexBox>
      </ProfileContent>
    </FlexBox>
  );
}
