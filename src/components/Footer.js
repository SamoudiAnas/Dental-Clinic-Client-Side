import React from "react";
import styled from "styled-components";

//icons
import { ReactComponent as Logo } from "../images/logo.svg";

function Footer() {
  const goTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <Logo className="icon" />

          <a href="/" className="logo_name">
            The Dental
          </a>
        </div>
        <div className="footer_info">
          <div className="center_vertically">
            <p>
              Phone Number: <span className="back_top">+123456789</span>
            </p>
            <p>
              Email: <span className="back_top">email@contact.com</span>
            </p>
          </div>

          <div className="address ">
            <p>866 Balistreri Light Suite 937, Helgatown 93810-6364</p>
          </div>
          <ul className="nav_links ">
            <li>
              <a href="/" className="link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="link">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="link">
                Contact
              </a>
            </li>
            <li>
              <a href="/sign-up" className="link">
                Sign Up
              </a>
            </li>
            <li>
              <a href="/sign-in" className="link">
                Login
              </a>
            </li>
            <li>
              <a href="/new-appointment" className="link">
                Make Appointment
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="bottom">
          <p className="copyright">
            &copy; Copyright 2021 - Allrights reserved
          </p>
          <p className="back_top" onClick={goTop}>
            Go back top
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  padding: 2rem 1rem 1rem;

  .footer_info {
    & > * {
      text-align: center;
      margin: 2rem 0 0;
    }
    @media screen and (min-width: 768px) {
      & > * {
        text-align: left;
        margin: 0;
      }
      display: grid;
      grid-template-columns: 1fr 1fr 2fr;
      gap: 2rem;
    }
  }

  .logo {
    cursor: pointer;
    display: flex;
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
    align-items: center;
    gap: 0.25rem;
    margin: 2rem 0 1rem;
  }

  .logo_name {
    color: ${(props) => props.theme.secondary};
    font-weight: 600;
    font-size: 1.2rem;
  }

  .icon {
    width: 2.5rem;
    cursor: pointer;
    fill: ${(props) => props.theme.primary};
  }

  .address {
    color: #969696;
  }

  .nav_links {
    display: flex;
    flex-wrap: wrap;
    gap: 0 3rem;
    color: ${(props) => props.theme.primary};
    margin: auto;
    &:hover {
      color: ${(props) => props.theme.primaryHover};
    }
  }

  .link {
    color: ${(props) => props.theme.secondary};
    font-weight: 500;
    margin: 0;
    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }

  hr {
    opacity: 0.25;
    margin: 3rem 0 1rem;
  }

  .bottom {
    padding: 0 1rem;
    text-align: center;
    @media screen and (min-width: 768px) {
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .copyright {
    color: #969696;
    font-size: 0.9rem;
    @media screen and (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }

  .back_top {
    color: ${(props) => props.theme.primary};
    text-decoration: underline;
    cursor: pointer;
  }
`;
