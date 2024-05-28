
import React, { useState } from 'react';
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "./headerMenu/mobileMenu /MobileMenu";
import { S } from "./HeaderStyles";
import { log } from 'console';



const BREAKPOINT = 768;

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);


  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo />

          {width < BREAKPOINT ? 
            <MobileMenu/>
           : <DesktopMenu/>}

        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
