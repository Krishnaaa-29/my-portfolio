import { styled } from "styled-components";

const SocialCard = ({ name, url, icon }) => {
  return (
    <Wrapper className="light-bg-2">
      <div className="container">
        <a href={url} target="_black" className={`card darkText-1 ${name}`}>
          {icon} {name}
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin: 2rem;
  margin-bottom: 0;

  .card {
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1.25rem;
    font-weight: 500;
  }

  .linked {
  }
`;

export default SocialCard;
