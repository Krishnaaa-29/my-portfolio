import { styled } from "styled-components";
import resume from "../assets/resume.png";
import { HiDownload, HiPhoneIncoming } from "react-icons/hi";
import { Link } from "react-scroll";

const Resume = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "http://localhost:5173/resume.pdf";
    link.download = "Krishna Kulshreshtha - Resume";
    link.click();
    link.remove();
  };

  return (
    <Wrapper className="light-bg-1" id="resume">
      <div className="header">
        <h3 className="darkText-2">Resume</h3>
        <h1 className="darkText-1">
          Interested in working <br /> with <span>Me?</span>
        </h1>
      </div>
      <div className="container">
        <div className="content">
          <div className="img-container">
            <img src={resume} alt="img" className="img" />
          </div>
          <div className="text-container">
            <p className="lightText-1">
              If you have any questions, feel free to contact me anytime.
              Additionally, you can download my resume to further get to know
              me!
            </p>
            <button
              type="button"
              className="btn resume-btn"
              onClick={handleClick}
            >
              <HiDownload /> Download Resume
            </button>
            <Link
              to="about"
              smooth={true}
              spy={true}
              className="btn contact-btn"
            >
              <HiPhoneIncoming /> Contact Me
            </Link>
            <p className="lightText-1">Looking forward to working with YOU!!</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 4rem 0;
  .header {
    margin: 0 10rem;
    span {
      color: #0064ff;
      background-image: -webkit-linear-gradient(0deg, #0064ff 30%, #60efff 75%);
      background-clip: text;
      -webkit-background-clip: text;
      -text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
    }
  }

  .content {
    background: hsla(216, 100%, 50%, 1);
    background: linear-gradient(
      315deg,
      hsla(216, 100%, 50%, 1) 0%,
      hsla(186, 100%, 69%, 1) 100%
    );
    background: -moz-linear-gradient(
      315deg,
      hsla(216, 100%, 50%, 1) 0%,
      hsla(186, 100%, 69%, 1) 100%
    );
    background: -webkit-linear-gradient(
      315deg,
      hsla(216, 100%, 50%, 1) 0%,
      hsla(186, 100%, 69%, 1) 100%
    );
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#0064ff", endColorstr="#60EFFF", GradientType=1 );

    display: flex;
    max-width: 60vw;
    margin: 2rem auto;
    border-radius: 2rem;

    .img-container {
      flex: 1;

      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .text-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin: 3rem;
      gap: 2rem;
      text-align: center;

      .btn {
        width: 250px;
        height: 40px;
        margin: 0 auto;
        border-radius: 10px;
        border: none;
        box-shadow: var(--shadow-1);

        font-size: 1.25rem;
        font-weight: 500;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        cursor: pointer;
      }

      .btn:hover {
        box-shadow: var(--shadow-3);
        transition: var(--transition);
      }

      .resume-btn {
        color: var(--white);
        background: var(--blue);

        /* &:hover {
          color: var(--blue);
          background: var(--white);
        } */
      }

      .contact-btn {
        color: var(--blue);
        background: var(--white);

        /* &:hover {
          color: var(--white);
          background: var(--blue);
        } */
      }
    }
  }
`;

export default Resume;
