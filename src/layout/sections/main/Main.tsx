import React from "react";
import photo from "../../../assets/images/2024-03-20-08.01.07.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";

export const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hi There!</S.SmallText>
            <S.Name>
              I am <span>Vyacheslav</span>
            </S.Name>
            <S.MainTitle>
              <p>A Web Developer.</p>
              <Typewriter
                options={{
                  strings: ["A Web Developer.", "A Frontend Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 50
                }}
              />
              
            </S.MainTitle>
            {/* <S.MainTitle>A Web Developer.</S.MainTitle> */}
          </div>
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <S.PhotoWrapper>
              <S.Photo src={photo} />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
