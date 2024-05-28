import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "../skills/Skills_Styles";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { Fade } from "react-awesome-reveal";

const skillData = [
  {
    iconId: "html",
    title: "HTML",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est pellentesque, laoreet nisl quis, posuere sem. Curabitur vitae pellentesque nisl. Sed id rhoncus ipsum. Quisque id eleifend metus. Quisque non est sed odio laoreet sollicitudin nec volutpat leo. Donec accumsan, justo ac pulvinar congue, quam justo placerat velit, ut consectetur augue risus eget massa.",
  },

  {
    iconId: "ccs",
    title: "CSS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est pellentesque, laoreet nisl quis, posuere sem. Curabitur vitae pellentesque nisl. Sed id rhoncus ipsum. Quisque id eleifend metus. Quisque non est sed odio laoreet sollicitudin nec volutpat leo. Donec accumsan, justo ac pulvinar congue, quam justo placerat velit, ut consectetur augue risus eget massa.",
  },

  {
    iconId: "figma",
    title: "WEB DESIGN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est pellentesque, laoreet nisl quis, posuere sem. Curabitur vitae pellentesque nisl. Sed id rhoncus ipsum. Quisque id eleifend metus. Quisque non est sed odio laoreet sollicitudin nec volutpat leo. Donec accumsan, justo ac pulvinar congue, quam justo placerat velit, ut consectetur augue risus eget massa.",
  },

  {
    iconId: "react",
    title: "REACT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est pellentesque, laoreet nisl quis, posuere sem. Curabitur vitae pellentesque nisl. Sed id rhoncus ipsum. Quisque id eleifend metus. Quisque non est sed odio laoreet sollicitudin nec volutpat leo. Donec accumsan, justo ac pulvinar congue, quam justo placerat velit, ut consectetur augue risus eget massa.",
  },

  {
    iconId: "typescript",
    title: "TYPESCRIPT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est pellentesque, laoreet nisl quis, posuere sem. Curabitur vitae pellentesque nisl. Sed id rhoncus ipsum. Quisque id eleifend metus. Quisque non est sed odio laoreet sollicitudin nec volutpat leo. Donec accumsan, justo ac pulvinar congue, quam justo placerat velit, ut consectetur augue risus eget massa.",
  },

  {
    iconId: "styledComp",
    title: "STYLED COMPONENTS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est pellentesque, laoreet nisl quis, posuere sem. Curabitur vitae pellentesque nisl. Sed id rhoncus ipsum. Quisque id eleifend metus. Quisque non est sed odio laoreet sollicitudin nec volutpat leo. Donec accumsan, justo ac pulvinar congue, quam justo placerat velit, ut consectetur augue risus eget massa.",
  },
];
export const Skills = () => {
  return (
    <S.Skills id={"skills"}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          <Fade cascade={true} damping={0.2}>
            {skillData.map((s, index) => (
              <Skill
                iconId={s.iconId}
                title={s.title}
                description={s.description}
              />
            ))}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
