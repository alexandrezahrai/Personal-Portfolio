import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  padding: 0 50px;
  margin: 2.5rem 0;

  object-fit: cover;
  overflow: hidden;
  border-radius: 10px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 4rem;
  row-gap: 4rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  padding: 20px 15px;
  background: #fff;
  border-radius: 0.25rem;
  border: 1px solid #eee;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
  text-align: center;
  transition: border-color, box-shadow 0.1s ease-in-out;
  &:hover {
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.09);
    border-color: #d1d1d1;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: auto;
  }
`;
export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 15px;
  text-align: start;
  z-index: 20;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
    text-align: center;
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  letter-spacing: -1px;
  color: #232b42;
  padding: 0.5rem 0;
  // font-size: ${(props) => (props.title ? "3rem" : "2rem")};
  font-size: 20px;
  width: 100%;
`;

export const CardInfo = styled.p`
  width: 100%;
  min-height: 100px;
  padding: 0 20px;
  color: rgba(55, 65, 81, 1);
  font-style: 2rem;
  line-height: 1.5;
  text-align: start;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  height: 60px;
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-evenly;

  margin: 1.25rem 0 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #3b82f6;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: transparent;
  width: 100px;
  border-radius: 0.25rem;
  border: 1px solid #eee;
  transition: 0.5s;
  &:hover {
    text-decoration: underline;

    color: #1d4ed8;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px 0px;
  }
`;
export const Tag = styled.li`
  color: rgba(107, 114, 128, 1);
  font-size: 1.5rem;
`;
