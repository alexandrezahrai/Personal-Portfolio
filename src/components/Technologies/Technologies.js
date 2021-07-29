import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  IconContainer,
  Icon,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionTitle style={{ padding: "16px 0px 16px 0px" }}>
      Technologies & Skills:
    </SectionTitle>
    <SectionText>
      From front-end to UI/UX design, I have experience working with a range of
      web-related tools and technologies. Nonetheless, I'm always willing and
      eager to expand my knowledge.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListParagraph>
            <IconContainer>
              <Icon src="/js5-logo.png" />
            </IconContainer>
            <IconContainer>
              <Icon src="/html-logo.png" />
            </IconContainer>
            <IconContainer>
              <Icon src="/css-logo.png" />
            </IconContainer>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListParagraph>
            <IconContainer>
              <Icon src="/react-logo.png" />
            </IconContainer>
            <IconContainer>
              <Icon src="/bootstrap-logo.png" />
            </IconContainer>
            <IconContainer>
              <Icon src="/next-logo.svg" />
            </IconContainer>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListParagraph>
            <IconContainer>
              <Icon src="/sass-logo.png" />
            </IconContainer>
            <IconContainer>
              <Icon src="/figma-logo.png" />
            </IconContainer>
            <IconContainer>
              <Icon src="/git-logo.png" />
            </IconContainer>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
