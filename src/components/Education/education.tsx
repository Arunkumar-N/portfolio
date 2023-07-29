import React, { ReactElement } from "react";
import {
  CardContainer,
  FlexBox,
  SubTitleBlock,
  TitleBlock,
} from "../../theme/styles";

export default function Education(): ReactElement {
  return (
    <>
      <FlexBox>
        <CardContainer>
          <TitleBlock>Bachelor of Engineering</TitleBlock>
          <SubTitleBlock style={{marginTop: 0}}>Computer Science and Engineering</SubTitleBlock>
          <SubTitleBlock style={{fontWeight: 600}}>
            N M A M Institute of Technology, Nitte (2012 - 2016)
          </SubTitleBlock>
        </CardContainer>
        <CardContainer className="mb-left-lg">
          <TitleBlock>Pre University Education</TitleBlock>
          <SubTitleBlock style={{marginTop: 0}}>Physics, Chemistry, Mathematics and Computer Science</SubTitleBlock>
          <SubTitleBlock style={{fontWeight: 600}}>
            St. Aloysius P.U College, Mangalore (2010 - 2012)
          </SubTitleBlock>
        </CardContainer>
      </FlexBox>
    </>
  );
}
