import { styled } from "styled-components";
import img from "../assets/home.png";
import { BiArrowToBottom } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <Wrapper id="home">
      <div className="home-center">
        <div className="home-img">
          <img src={img} alt="home" />
        </div>
        <div className="home-content">
          <p>hi there, I am</p>
          <h3>krishna kulshreshtha</h3>
          <TypeAnimation
            sequence={["Front-End Developer", 3000, "Front-End", 1000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "3.5rem", fontWeight: "700" }}
          />
          <p>
            young and hardworking individual currently in 4th year, engineering.
            Always looking out for new and innovative practices to hone my
            skills and deliver my 100% to every work I do{" "}
          </p>
          <div className="explore-container">
            <a href="#about">
              <span className="explore-btn">
                Explore <BiArrowToBottom className="explore-arrow" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  .home-center {
    width: 75vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    .home-img {
      width: 275px;
      height: 275px;
      flex: 1;
      border-radius: 50%;
      object-fit: cover;
      overflow: hidden;
    }

    .home-content {
      flex: 3;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      h3 {
        font-size: 2rem;
        margin-top: -1rem;
      }

      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 0.9rem;
        color: #535355;
        max-width: 550px;
        line-height: 1.5;
      }

      a {
        text-decoration: none;
      }

      .explore-container {
        margin-top: 2rem;
        max-width: 125px;
        margin: 0 auto;
        .explore-btn {
          background: #0064ff;
          color: #fff;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;

          display: flex;
          align-items: center;
        }

        .explore-arrow {
          font-size: 1.5rem;
        }
      }

      .explore-container:hover {
        .explore-btn {
          gap: 0.5rem;
          padding: 0.25rem 1rem;
          transition: 0.3s ease-in-out all;
        }
        .explore-arrow {
          font-size: 1.75rem;
          transition: 0.3s ease-in-out all;
        }
      }
    }
  }
`;

export default Home;
