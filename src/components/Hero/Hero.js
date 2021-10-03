import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There!!!
        <br />
        I'm Shubham Parashar
      </SectionTitle>
      <SectionText>
        Technology and learning are the two things that drive me. I look for
        different chances to explore and expand my horizons.
      </SectionText>
      <Button onClick={() => {}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
