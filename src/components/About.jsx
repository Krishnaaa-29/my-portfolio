import { styled } from "styled-components";
import TextCard from "./TextCard";
import { AboutSkills } from "../utils/lists";
import Accordion from "./Accordion";
import FigureCard from "./FigureCard";

const About = () => {
  return (
    <Wrapper className="light-bg-2" id="about">
      <div className="header-container">
        <h3 className="darkText-2">About Me</h3>
        <h1 className="darkText-1">Get to Know Me</h1>
      </div>
      <div className="content">
        <div className="cards">
          <TextCard
            header="React developer at the intersection between design and code"
            para="Starting with HTML, CSS and JavaScript, I taught myself programming on my own. However, nowadays there is a lot to discover far beyond vanilla JavaScript: Today I work with TypeScript in React, use Redux or Context for state management and use SASS as a pre-processor for CSS. As you can see, I also like to work with motion libraries - e.g. Framer Motion"
            size="half"
          />
          <div className="skill-card">
            {AboutSkills.map((item, index) => {
              return <FigureCard key={index} {...item} />;
            })}
          </div>
        </div>
        <div className="accordion">
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 4rem 0;
  .header-container {
    padding: 0 10rem;
    margin-bottom: 2rem;

    h3 {
      margin-bottom: 0.5rem;
    }

    h1 {
      font-size: 4rem;
      margin-top: 0;
    }
  }

  .content {
    display: flex;
  }

  .skill-card {
    display: flex;
    gap: 1.5rem;
    padding: 2rem 0 1rem 8rem;
  }
`;

export default About;
