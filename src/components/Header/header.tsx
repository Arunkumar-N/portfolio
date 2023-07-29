import React, { ReactElement } from "react";
import styled from "styled-components";
const HeaderBlock = styled.div`
widht: 100%;
  max-width: 1280px;
  height: 100%;
  margin: auto;
`;
const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 3px 3px 0 var(--shadowColor);
  position: sticky;
  top: 0;
  background-color: var(--aliceBlue);
  border-top: 4px solid var(--orangeRed);
  z-index: 1;
`;

const Image = styled.img`
  height: calc(100% - 16px);
  box-shadow: 0 3px 3px 0 var(--shadowColor);
  float: left;
  margin: 8px;
  border-radius: 50%;
`;

export default function Header(): ReactElement {
  return (
    <HeaderContainer>
      <HeaderBlock>
        <Image src={"favicon_io/apple-touch-icon.png"} alt="A" />
      </HeaderBlock>
    </HeaderContainer>
  );
}
