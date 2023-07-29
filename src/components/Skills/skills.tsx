import React, { ReactElement } from "react";
import { FlexBox, Icon, IconImage } from "../../theme/styles";
import { ASSETS_PATH, SKILLS } from "../../helpers/constants";
import { styled } from "styled-components";
import { breakpoints } from "../../theme/breakpoints";
import { spacing } from "../../theme/spacing";

const ProgressBar = styled.div`
  height: 12px;
  width: -webkit-fill-available;
  background-color: var(--grey3);
  border: 1px solid var(--grey2);
  border-radius: 4px;
  margin: auto;
`;
const ProgressBarTooltip = styled.div<{ left?: number }>`
  top: -14px;
  display: block;
  width: fit-content;
  position: relative;
  font-size: 10px;
  color: var(--grey);
  font-weight: bold;
  left: ${(props) => (props.left ? props.left : 10) + 1}%;
`;
const ProgressBarDiv = styled.div<{ width?: number }>`
  position: inherit;
  height: 12px;
  background: linear-gradient(to right, var(--grey2), var(--grey));
  width: ${(props) => (props.width ? props.width : 10)}%;
  text-align: left;
  font-size: 8px;
  span {
    margin-left: 8px;
    color: var(--aliceBlue);
  }
`;
const FlexBoxProgress = styled(FlexBox)`
  @media (max-width: ${breakpoints.xl}) {
    flex-flow: row;
  }
`;
const FlexBoxContainer = styled.div<{ len: number }>`
  flex-direction: column;
  display: flex;
  height: ${(props) => (props.len ? props.len * 1.5 : 6)}rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: ${spacing.md};
  ${FlexBoxProgress} {
    max-width: 49%;
  }
  @media (max-width: ${breakpoints.xl}) {
    height: ${(props) => (props.len ? 2 * props.len * 1.5 : 6)}rem;
    ${FlexBoxProgress} {
      max-width: 100%;
    }
  }
`;
export default function Skills(): ReactElement {
  return (
    <>
      {/* <OrangeRedTitle>Skills</OrangeRedTitle> */}
      <FlexBoxContainer len={SKILLS.length}>
        {SKILLS.map((skill, index) => (
          <FlexBoxProgress key={index}>
            <Icon>
              <IconImage src={ASSETS_PATH + skill.src} alt={skill.alt} />
            </Icon>
            <ProgressBar>
              <ProgressBarDiv width={skill.rate * 10}>
                <span style={{ lineHeight: '12px'}}>{skill.alt}</span>
              </ProgressBarDiv>
              <ProgressBarTooltip left={skill.rate * 10}>
                {skill.rate} / 10
              </ProgressBarTooltip>
            </ProgressBar>
          </FlexBoxProgress>
        ))}
      </FlexBoxContainer>
    </>
  );
}
