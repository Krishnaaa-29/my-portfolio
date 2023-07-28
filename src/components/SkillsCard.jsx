import { styled } from "styled-components";

const SkillsCard = ({ header, list }) => {
  return (
    <Wrapper className="light-bg-1">
      <div className="container">
        <h3 className="darkText-1">{header}</h3>
        <div className="logos">
          {list.map((item, index) => {
            const { url, name } = item;
            return (
              <div className="logo" key={index}>
                <img src={url} alt={name} />
                <p className="darkText-2">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  /* margin: 2rem 5rem 0; */
  padding: 1rem 2rem;
  border-radius: 2rem;
  display: inline-block;
  box-shadow: var(--shadow-2);

  .logos {
    margin-top: 1rem;
    display: flex;
    gap: 2rem;

    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;

      p {
        text-transform: capitalize;
        font-weight: 500;
        margin-top: 0.5rem;
      }
    }
  }

  &:hover {
    box-shadow: var(--shadow-4);
    transition: var(--transition);
  }
`;

export default SkillsCard;
