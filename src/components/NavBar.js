import React, { useEffect, useState } from "react";
import styled from "styled-components";

//icons
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Menu } from "../images/menu.svg";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleLinks = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (width <= 768) {
      setIsNavOpen(false);
    }
  }, [width]);

  return (
    <NavContainer>
      <Wrapper className="container" isNavOpen={isNavOpen}>
        <div className="logo">
          <Logo className="icon" />

          <a href="/" className="logo_name">
            The Dental
          </a>
        </div>
        <ul className="links">
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
            <a href="/services" className="link">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="link">
              Contact
            </a>
          </li>
          {isNavOpen && (
            <ul>
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
          )}
        </ul>

        <ul className="auth">
          <li>
            <a href="/sign-up" className="sign_up">
              Sign Up
            </a>
          </li>
          <li>
            <a href="/sign-in" className="sign_in">
              Login
            </a>
          </li>
        </ul>

        <div className="menu">
          <Menu className="icon" onClick={toggleLinks} />
        </div>
      </Wrapper>
    </NavContainer>
  );
}

export default NavBar;

const NavContainer = styled.div`
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .logo {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .logo_name {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
      color: ${(props) => props.theme.secondary};
      font-weight: 600;
      font-size: 1.2rem;
    }
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    color: ${(props) => props.theme.primary};

    &:hover {
      color: ${(props) => props.theme.primaryHover};
    }

    @media screen and (max-width: 768px) {
      position: fixed;
      top: ${(props) => (props.isNavOpen ? "4rem" : "-100%")};
      left: 0;
      right: 0;
      width: 90%;
      margin: 0 auto;
      padding: 1rem 0;
      background-color: #ffffff;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      z-index: 100;
      text-align: center;
      display: initial;
    }
  }

  .link {
    color: ${(props) => props.theme.secondary};
    font-weight: 500;

    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }

  .menu {
    display: block;

    .icon {
      display: flex;
      align-items: center;
      width: 1.3rem;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .icon {
    width: 2.5rem;
    cursor: pointer;
    fill: ${(props) => props.theme.primary};
  }

  .auth {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  .sign_up {
    @media screen and (min-width: 768px) {
      color: ${(props) => props.theme.primary};
      padding: 0.75rem 1.5rem;
      border: 1px solid ${(props) => props.theme.primary};
      border-radius: 0.25rem;

      &:hover {
        color: white;
        background-color: ${(props) => props.theme.primary};
      }
    }
  }

  .sign_in {
    @media screen and (min-width: 768px) {
      color: white;
      padding: 0.75rem 1.5rem;

      background-color: ${(props) => props.theme.primary};
      border: 1px solid ${(props) => props.theme.primary};
      border-radius: 0.25rem;

      &:hover {
        border: 1px solid ${(props) => props.theme.primaryHover};
        background-color: ${(props) => props.theme.primaryHover};
      }
    }
  }
`;
