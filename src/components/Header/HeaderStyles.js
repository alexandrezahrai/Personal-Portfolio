import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 4rem 6rem 0rem 6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    padding: 1rem;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  justify-content: space-around;
  gap: 4rem;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    visibility: hidden;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 18px;
  line-height: 32px;
  color: rgba(17, 24, 39, 1);
  transition: 0.3s ease;
  position: relative;
  left: 0;
  cursor: pointer;
  &:hover {
    left: 6px;
    opacity: 0.5;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  transition: all 0.1s ease;
  color: black;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    visibility: hidden;
  }
`;
