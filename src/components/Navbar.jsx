import { styled } from "styled-components";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center" id="navbar">
        <div className="home">
          <a href="#">
            <FaHome className="home-icon" />
          </a>
        </div>
        <div className="fields">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#contact">
            <span className="contact">Contact</span>
          </a>
        </div>
        <div className="mode-btn">
          <button type="button" className="toggle-btn">
            <HiOutlineSun />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  a {
    text-decoration: none;
    font-size: 1rem;
    color: #1d1d1f;
  }

  .nav-center {
    max-width: 70vw;
    max-height: 50px;
    margin: 1rem auto;
    background: rgba(255, 255, 255, 0.9);
    position: fixed;
    left: 30%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    padding: 1rem 2rem;
    border-radius: 50px;
    z-index: 9999;

    box-shadow: 2px 5px 8px 2px rgba(35, 35, 35, 0.29);
    -webkit-box-shadow: 2px 5px 8px 2px rgba(35, 35, 35, 0.29);
    -moz-box-shadow: 2px 5px 8px 2px rgba(35, 35, 35, 0.29);
  }

  .fields {
    display: flex;
    gap: 2.5rem;
  }

  .home-icon {
    color: #0064ff;
    font-size: 1.25rem;
  }
  .contact {
    background: #0064ff;
    padding: 5px 10px;
    color: #fff;
    border-radius: 50px;
  }

  .toggle-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export default Navbar;
