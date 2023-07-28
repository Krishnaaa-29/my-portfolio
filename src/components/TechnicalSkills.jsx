import { styled } from "styled-components";
import SkillsCard from "./SkillsCard";
import {
  languages,
  frameworks,
  libraries,
  design,
  code,
  version,
} from "../utils/lists";

const TechnicalSkills = () => {
  return (
    <Wrapper className="skills light-bg-2" id="skills">
      <div className="header">
        <h3 className="darkText-2">Skills</h3>
        <h1 className="darkText-1">
          My Arsenal for bringing <br />{" "}
          <span className="gradient-text">Ideas</span> to Life.
        </h1>
      </div>
      <div className="skill-cards-container">
        <div className="card-row first-row">
          <SkillsCard header="Languages" list={languages} />
          <SkillsCard header="Code Editor" list={code} />
        </div>
        <div className="card-row second-row">
          <SkillsCard header="Frameworks" list={frameworks} />
          <SkillsCard header="Version Control" list={version} />
        </div>
        <div className="card-row third-row">
          <SkillsCard header="Libraries" list={libraries} />
          <SkillsCard header="Design" list={design} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 4rem 0;
  .header {
    margin: 0 10rem;

    .gradient-text {
      color: #ff0f7b;
      background-image: -webkit-linear-gradient(0deg, #ff0f7b 30%, #f89b29 75%);
      background-clip: text;
      -webkit-background-clip: text;
      -text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
    }
  }

  .skill-cards-container {
    margin: 2rem 10rem;
    display: flex;
    flex-direction: column;

    .card-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 2rem;
    }
  }
`;
export default TechnicalSkills;
