import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle
        main
        style={{
          fontSize: "4.75rem",
        }}
      >
        Hey, I'm Alex Zahrai!
      </SectionTitle>
      <SectionText>
        Welcome to my portfolio! I'm a web developer based in the United States.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
