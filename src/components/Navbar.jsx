import { styled } from "styled-components";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center" id="navbar">
        <div className="home nav-links">
          <Link to="home" smooth={true} spy={true} className="lightText-1">
            <FaHome className="home-icon" />
          </Link>
        </div>
        <ul className="fields">
          <li className="nav-links">
            <Link to="about" smooth={true} spy={true}>
              About
            </Link>
          </li>
          <li className="nav-links">
            <Link to="skills" smooth={true} spy={true}>
              Skills
            </Link>
          </li>
          <li className="nav-links">
            <Link to="projects" smooth={true} spy={true}>
              Projects
            </Link>
          </li>
          <li className="nav-links">
            <Link to="resume" smooth={true} spy={true}>
              Resume
            </Link>
          </li>
          <li className="contact">
            <Link to="contact" smooth={true} spy={true} className="scroll-btn">
              Contact
            </Link>
          </li>
        </ul>
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

  .nav-links {
    cursor: pointer;
  }

  .nav-links:hover {
    color: var(--blue);
    scale: 1.15;
    transition: var(--transition);
  }
  .nav-links .active {
    color: var(--blue);
  }
  .home-icon {
    color: var(--blue);
    font-size: 1.25rem;
  }
  .scroll-btn {
    background: var(--blue);
    padding: 5px 10px;
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
  }

  .toggle-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export default Navbar;
