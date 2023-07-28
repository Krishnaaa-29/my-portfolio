import { styled } from "styled-components";

const TextCard = ({ header, para, size }) => {
  return (
    <Wrapper
      style={{ maxWidth: size == "half" ? "40vw" : "25vw" }}
      className="light-bg-1"
    >
      <div className="container">
        <h3 className="darkText-1">{header}</h3>
        <p className="darkText-2">{para}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin: 0 6rem;
  padding: 2rem;
  border-radius: 2rem;

  p {
    margin-top: 1rem;
    line-height: 1.5;
  }
`;

export default TextCard;
