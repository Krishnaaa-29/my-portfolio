import { styled } from "styled-components";

const FigureCard = ({ text, number }) => {
  return (
    <Wrapper className="light-bg-1">
      <div className="container">
        <h3 className="darkText-1">{number}</h3>
        <p className="darkText-2">{text}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  min-width: 140px;
  padding: 1rem;
  border-radius: 2rem;
  .container {
    text-align: center;
    h3 {
      margin-bottom: 0;
    }
    p {
      margin-top: 0.5rem;
    }
  }
`;

export default FigureCard;
