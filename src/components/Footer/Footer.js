import React from "react";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { SectionDivider } from "../../styles/GlobalComponents";
import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialContainer,
  Icons,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionDivider />
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact:</LinkTitle>
          <LinkItem href="mailto:alexandrezahrai@protonmail.com">
            alexandrezahrai@protonmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <Icons href="https://github.com/alexandrezahrai">
          <VscGithub size="3.1rem" />
        </Icons>
        <Icons href="https://www.linkedin.com/in/alexandre-zahrai">
          <SiLinkedin size="3rem" />
        </Icons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
