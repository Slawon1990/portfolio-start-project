import React, { useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabsStatusType } from "./work/tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImage from "../../../../src/assets/images/proj-2.webp";
import timerImage from "../../../../src/assets/images/proj-1.webp";
import { Container } from "../../../components/Container";
import { S } from "../works/Works_Styles";
import { AnimatePresence, motion } from "framer-motion";

const tabsItems: Array<{ status: TabsStatusType; title: string }> = [
  {
    title: "All",
    status: "all",
  },

  {
    title: "Landing Page",
    status: "landing",
  },

  {
    title: "React",
    status: "react",
  },

  {
    title: "spa",
    status: "spa",
  },
];
const worksData = [
  {
    title: "Social Network",
    src: socialImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorem, laborum voluptate quia, fugiat, nisi eveniet quas commodi exercitationem tenetur aspernatur provident molestias blanditiis facilis. Cum ipsa voluptatum nostrum minima!",
    type: "spa",
    id: 1
  },

  {
    title: "Timer",
    src: timerImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorem, laborum voluptate quia, fugiat, nisi eveniet quas commodi exercitationem tenetur aspernatur provident molestias blanditiis facilis. Cum ipsa voluptatum nostrum minima!",
    type: "react",
    id: 2
  },

  {
    title: "Social Network",
    src: socialImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorem, laborum voluptate quia, fugiat, nisi eveniet quas commodi exercitationem tenetur aspernatur provident molestias blanditiis facilis. Cum ipsa voluptatum nostrum minima!",
    type: "spa",
    id: 3
  },

  {
    title: "Timer",
    src: timerImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorem, laborum voluptate quia, fugiat, nisi eveniet quas commodi exercitationem tenetur aspernatur provident molestias blanditiis facilis. Cum ipsa voluptatum nostrum minima!",
    type: "react",
    id: 4
  },

  {
    title: "Social Network",
    src: socialImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorem, laborum voluptate quia, fugiat, nisi eveniet quas commodi exercitationem tenetur aspernatur provident molestias blanditiis facilis. Cum ipsa voluptatum nostrum minima!",
    type: "spa",
    id: 5
  },

  {
    title: "Timer",
    src: timerImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorem, laborum voluptate quia, fugiat, nisi eveniet quas commodi exercitationem tenetur aspernatur provident molestias blanditiis facilis. Cum ipsa voluptatum nostrum minima!",
    type: "react",
    id: 6
  },
]

export const Works: React.FC = () => {
  const [CurrentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = worksData;

  if (CurrentFilterStatus === "landing") {
    filteredWorks = worksData.filter((work) => work.type === "Landing");
  }

  if (CurrentFilterStatus === "react") {
    filteredWorks = worksData.filter((work) => work.type === "react");
  }

  if (CurrentFilterStatus === "spa") {
    filteredWorks = worksData.filter((work) => work.type === "spa");
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id={"works"}>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          CurrentFilterStatus={CurrentFilterStatus}
        />
        <FlexWrapper justify={"space-between"} align={"flex-start"} wrap="wrap">
          <AnimatePresence>
            {filteredWorks.map((w) => {
              return (
                <motion.div style={{ width: '400px', flexGrow: 1, maxWidth: '540px'}}
                  layout
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  key={w.id}
                >
                  <Work title={w.title} src={w.src} text={w.text} key={w.id} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
