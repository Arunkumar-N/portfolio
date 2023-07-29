import React, { ReactElement, useState } from "react";
import Profile from "../Profile/profile";
import styled from "styled-components";
import Experience from "../Experience/experience";
import { breakpoints } from "../../theme/breakpoints";
import Education from "../Education/education";
import CareerSummary from "../CareerSummary/careerSummary";
import Skills from "../Skills/skills";
import Projects from "../Projects/projects";
import { Divider } from "../../theme/styles";

const ContentFrame = styled.div`
  max-width: 1280px;
  margin: 24px auto;
  @media (max-width: ${breakpoints.lg}) {
    margin: 24px 10px;
  }
`;

const StepperContainer = styled.div`
  width: 100%;
`;
const SlantedButton = styled.div`
  position: relative;
  display: inline-block;
  width: 30%;
  height: 25px;
  text-align: center;
  vertical-align: middle;
  padding: 5px 10px;
  color: var(--orangeRed);
  font-weight: bold;
  cursor: pointer;
  border-right: 0px;
  background: linear-gradient(to right, var(--grey), var(--grey2), var(--grey));
  border: 1px solid var(--lightgrey);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
  vertical-align: middle;
  &:nth-child(2) {
    border-radius: unset;
  }
  &:nth-child(3) {
    border-radius: unset;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &.active {
    border: 2px solid var(--orangeRed);
    border-right: 0px;
    box-shadow: 0 3px 3px 0 var(--shadowColor);
    background: linear-gradient(to right, var(--shadowColor2), var(--aliceBlue), var(--shadowColor2));
  }
  &.active:nth-child(2) {
    border-left: 0px;
    border-right: 0px;
  }
  &.active:nth-child(3) {
    border-left: 0px;
    border-right: 2px solid var(--orangeRed);
  }
  @media (max-width: ${breakpoints.lg}) {
    padding: unset;
  }
`;
type sectionType = "EXP" | "SKILL" | "EDU";

export default function Content(): ReactElement {
  const [section, setSection] = useState<sectionType>("EXP");
  return (
    <ContentFrame>
      <Profile />
      <Divider />
      <CareerSummary />
      <Divider />
      <Projects />
      <Divider />
      <StepperContainer>
        <SlantedButton
          role="button"
          className={section === "EXP" ? "active" : ""}
          tabIndex={0}
          onClick={() => setSection("EXP")}
        >
          Experience
        </SlantedButton>
        <SlantedButton
          role="button"
          className={section === "SKILL" ? "active" : ""}
          tabIndex={0}
          onClick={() => setSection("SKILL")}
        >
          Skills
        </SlantedButton>
        <SlantedButton
          role="button"
          className={section === "EDU" ? "active" : ""}
          tabIndex={0}
          onClick={() => setSection("EDU")}
        >
          Education
        </SlantedButton>
      </StepperContainer>
      {section === "EXP" && <Experience />}
      {section === "SKILL" && <Skills />}
      {section === "EDU" && <Education />}
    </ContentFrame>
  );
}
