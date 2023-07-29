import React, { ReactElement } from "react";

import { FlexBox, SubTitleBlock } from "../../theme/styles";
import { CardContainer, TitleBlock } from "../../theme/styles";
import { EXPERIENCES } from "../../helpers/constants";
import styled from "styled-components";
import { spacing } from "../../theme/spacing";

const Circle = styled.div`
  background: linear-gradient(to top, var(--grey), var(--grey2));
  position: relative;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.5em;
  border-radius: 100%;
  text-align: center;
  box-shadow: 0 0 0 3px #fff;
  &:after {
    content: " ";
    margin-left: 10px;
    padding-top: 3px;
    display: block;
    top: 1px;
    right: 55%;
    bottom: 1px;
    left: 45%;
    height: 100%;
    width: 3px;
    transform: scale(1, 2);
    transform-origin: 52% -100%;
    background-color: var(--orangeRed);
    z-index: 1;
  }
`;
const VerticalStep = styled.div`
  position: relative;
  min-height: ${spacing.sm};
  margin-top: ${spacing.xl};
  div:first-child {
    position: static;
  }
  &:first-child {
    margin-top: ${spacing.sm};
  }
  &:last-child ${Circle}:after {
    display: none;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: -22px;
`;
const ExpCardContainer = styled(CardContainer)`
  ${VerticalStep}:first-child ${TitleContainer} {
    font-weight: 700;
  }
`;

export default function Experience(): ReactElement {
  return (
    <>
      {/* <OrangeRedTitle>Experience</OrangeRedTitle> */}
      <FlexBox $isColumn>
        {EXPERIENCES.map((exp, index) => (
          <ExpCardContainer key={"Exp-" + index}>
            <TitleBlock>{exp.subtitle}</TitleBlock>
            <SubTitleBlock>{exp.duration}</SubTitleBlock>
            <div>
              {exp.steps.map((step, index) => (
                <VerticalStep key={"Step-" + index}>
                  <div>
                    <Circle />
                  </div>
                  <TitleContainer>
                    <div>{step}</div>
                  </TitleContainer>
                </VerticalStep>
              ))}
            </div>
          </ExpCardContainer>
        ))}
      </FlexBox>
    </>
  );
}
