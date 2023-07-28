import { styled } from "styled-components";

const About = () => {
  return (
    <Wrapper className="light-bg-2" id="about">
      <div className="header-container">
        <h3 className="darkText-2">About Me</h3>
        <h1 className="darkText-1">Get to Know Me</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding-top: 2rem;
  .header-container {
    padding: 0 10rem;

    h3 {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
    }

    h1 {
      font-size: 4rem;
      margin-top: 0;
    }
  }
`;

export default About;
