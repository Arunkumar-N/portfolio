import React, { ReactElement } from "react";
import {
  CardContainer,
  ContentBlock,
  Divider,
  FlexBox,
  GreySpan,
  Icon,
  IconImage,
  OrangeRedTitle,
  SubTitleBlock,
  TitleBlock,
} from "../../theme/styles";
import { PROJECTS } from "./constants";
import { ASSETS_PATH } from "../../helpers/constants";
import styled from "styled-components";
import { breakpoints } from "../../theme/breakpoints";

const ProjectContainer = styled(CardContainer)`
  max-height: 150px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &:hover, :focus {
    max-height: 100vh;
    border: 1px solid var(--orangeRed);
    background: linear-gradient(to right, var(--lightgrey), var(--grey2))
  }
`;
const HideInMobile = styled.div`
  display: block;
  @media (max-width: ${breakpoints.xl}) {
    display: none;
  }
`;


export default function Projects(): ReactElement {
  return (
    <>
      <OrangeRedTitle>Projects</OrangeRedTitle>
      {PROJECTS.map((project, index) => (
        <ProjectContainer key={"proj-" + index}>
          <FlexBox>
            <div>
              <TitleBlock>{project.title}</TitleBlock>
              <SubTitleBlock>{project.subtitle}</SubTitleBlock>
            </div>

            <HideInMobile>
              {project.techStack.map((tech, index) => (
                <Icon key={"tech-" + index}>
                  <IconImage src={ASSETS_PATH + tech} alt={tech} />
                </Icon>
              ))}
            </HideInMobile>
          </FlexBox>
          <Divider />
          <SubTitleBlock>{project.description}</SubTitleBlock>
          <br />
          <GreySpan style={{ float: "left" }}>Responsibilities: </GreySpan>
          <br />
          <ContentBlock>
            <ul>
              {project.responsibilities.map((responsibility, index) => (
                <li key={"resp-" + index}>{responsibility}</li>
              ))}
            </ul>
          </ContentBlock>
        </ProjectContainer>
      ))}
    </>
  );
}
