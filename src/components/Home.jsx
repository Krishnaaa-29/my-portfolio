import { styled } from "styled-components";
import img from "../assets/home.png";
import { BiArrowToBottom } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <Wrapper className="light-bg-1" id="home">
        <div className="home-center">
          <div className="home-img">
            <img src={img} alt="home" className="img" />
          </div>
          <div className="home-content">
            <p className="darkText-2">hi there, I am</p>
            <h3 className="darkText-1">krishna kulshreshtha</h3>
            <TypeAnimation
              sequence={["Front-End Developer", 3000, "Front-End", 1000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "3.5rem",
                fontWeight: "700",
              }}
              className="animation"
            />
            <p className="darkText-2">
              young and hardworking individual currently in 4th year,
              engineering. Always looking out for new and innovative practices
              to hone my skills and deliver my 100% to every work I do{" "}
            </p>
            <div className="explore-container">
              <Link to="about" smooth={true} spy={true} className="explore-btn">
                Explore <BiArrowToBottom className="explore-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="section-padding">
        <h1 className="quote">
          An Aspiring Developer, I'm driven by a strong desire to tackle
          Contemporary Challenges and find Innovative Solutions!
        </h1>
      </div>
    </>
  );
};

const Wrapper = styled.article`
  height: 100vh;
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
      width: 350px;
      height: 350px;
      flex: 1.5;
      border-radius: 50%;
      /* overflow: hidden; */
    }

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .animation {
      color: #ff1b6b;
      background-image: -webkit-linear-gradient(0deg, #ff1b6b 30%, #45caff 75%);
      background-clip: text;
      -webkit-background-clip: text;
      text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
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
        margin-bottom: 1rem;
      }

      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 0.9rem;
        max-width: 550px;
        line-height: 1.5;
      }

      .explore-container {
        margin-top: 2rem;
        max-width: 125px;
        margin: 0 auto;
        .explore-btn {
          background: #0064ff;
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 50px;

          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .explore-arrow {
          font-size: 1.5rem;
        }
      }

      .explore-container:hover {
        cursor: pointer;
        scale: 1.1;
        transition: var(--transition);
      }
    }
  }
`;

export default Home;
