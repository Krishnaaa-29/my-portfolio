import { styled } from "styled-components";
import { socials } from "../utils/socials";
import SocialCard from "./SocialCard";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";

const Contact = () => {
  return (
    <Wrapper className="light-bg-2" id="contact">
      <div className="header">
        <h3 className="darkText-2">Contact</h3>
        <h1 className="darkText-1">
          Let's Get to know <br /> <span>EachOther</span>
        </h1>
      </div>
      <div className="container">
        <p className="darkText-2 description">
          I'm actively seeking new opportunities and I welcome any feedback or
          inquiries. Feel free to reach out to me with questions or just to say
          hello, and I'll do my utmost to respond promptly.
        </p>
        <div className="form">
          <form className="light-bg-1">
            {/* <div className="first-row"></div> */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="form-input half light-bg-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="form-input half light-bg-2"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="form-input light-bg-2"
            />
            <textarea
              name="message"
              className="form-input light-bg-2"
              placeholder="Message"
              required
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
          <div className="socials light-bg-1 ">
            {socials.map((item, index) => {
              return <SocialCard key={index} {...item} />;
            })}
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
  }

  .container {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .description {
      width: 50vw;
      text-align: center;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }

    .form {
      display: flex;
      width: 60vw;
      gap: 2rem;

      form {
        border-radius: 20px;
        flex: 2;
        box-shadow: var(--shadow-4);

        .form-input {
          width: 95%;
          display: inline-block;
          border: none;
          margin: 1rem;
          margin-bottom: 0;
          height: 40px;
          padding: 0.5rem;
          border-radius: 10px;
          border: 1px solid lightgray;
        }
        .form-input:focus {
          border: 1px solid #0064ff;
        }

        input[name="name"],
        input[name="email"] {
          width: 44%;
        }

        textarea {
          min-height: 200px;
        }

        .btn {
          width: 95%;
          margin: 1rem;
          height: 40px;
          background: var(--blue);
          border: none;
          border-radius: 10px;
          color: var(--white);
          font-size: 1.25rem;
          cursor: pointer;
        }
      }

      .socials {
        flex: 1;
        border-radius: 20px;
        box-shadow: var(--shadow-4);
      }
    }
  }
`;
export default Contact;
