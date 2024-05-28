import React from "react";
import { S } from "../footer/Footer_Styles"
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";




const SocialItemsData = [
  {
    iconId: "instagram",
  },

  {
    iconId: "telegram",
  },

  {
    iconId: "vk",
  },

  {
    iconId: "linledin",
  },
];
export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.Name>Vyacheslav</S.Name>
        <S.SocialList>
          {SocialItemsData.map((s, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink>
                  <Icon
                    height={"21"}
                    width={"21"}
                    viewBox={"0 0 21 21"}
                    iconId={s.iconId}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
        </S.SocialList>
        <S.Copyright>
          © 2024 Vyacheslav Tyutyunikov, All Rights Reserved.
        </S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};

