import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
        <FlexWrapper direction={"column"} align={"center"}>
        <Name>Vyacheslav</Name>
      <SocialList>
        <SocialItem>
        <SocialLink>
          <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}iconId={"instagram"} />
        </SocialLink>
        </SocialItem>
        <SocialItem>
        <SocialLink>
          <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}iconId={"telegram"} />
        </SocialLink>
        </SocialItem>
        <SocialItem>
        <SocialLink>
          <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}iconId={"vk"} />
        </SocialLink>
        </SocialItem>
        <SocialItem>
        <SocialLink>
          <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}iconId={"linledin"} />
        </SocialLink>
        </SocialItem>
        </SocialList>
      <Copyright>© 2024 Vyacheslav Tyutyunikov, All Rights Reserved.</Copyright>

        </FlexWrapper>

    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
background-color: #b9ee8a;
min-height: 20vh;
`;

const SocialList = styled.ul`
display: flex;
gap: 30px;
`;

const SocialLink = styled.a``;

const SocialItem = styled.li``;


const Name = styled.span``;

const Copyright = styled.small``;
