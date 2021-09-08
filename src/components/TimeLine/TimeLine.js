import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Timeline = () => (
  <Section id="about">
    <SectionTitle style={{ paddingBottom: "16px" }}>About Me:</SectionTitle>
    <SectionText>
      Hi, my name is Alex! 👋 I'm an electronic music producer turned web
      developer with an interest in web development and design. Besides coding,
      my interests include soccer (football), working out, reading, listening to
      history podcasts, and occasionally playing video games.
    </SectionText>
  </Section>
);
export default Timeline;
