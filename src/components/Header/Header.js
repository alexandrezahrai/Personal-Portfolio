import Link from "next/link";
import React from "react";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";

import {
  Container,
  Div1,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div1>
    <Div3>
      <SocialIcons href="https://github.com/alexandrezahrai">
        <VscGithub size="3.1rem" style={{ color: "#211f1f" }} />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/alexandre-zahrai">
        <SiLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
