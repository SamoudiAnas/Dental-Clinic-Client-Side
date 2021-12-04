import React, { useState } from "react";
import styled from "styled-components";
import authBg from "../images/authbg.jpg";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <div className="form_container container">
        <h2 className="sign_title">Welcome Back!</h2>
        <form>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="sign_up_btn">
            Login
          </button>
        </form>

        <p className="already_user">
          New to The Dental?
          <a href="/sign-up" className="login_link">
            Sign up
          </a>
        </p>
      </div>
    </Wrapper>
  );
}

export default SignIn;

const Wrapper = styled.div`
  position: relative;
  padding: 10rem 1rem;
  &::before {
    content: "";
    background-image: url(${authBg});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    opacity: 0.1;
  }

  .form_container {
    @media screen and (min-width: 768px) {
      width: 40%;
    }
  }

  .sign_title {
    text-align: center;
    margin-bottom: 2rem;
  }

  input {
    padding: 0.75rem 1.5rem;
    margin: 0.5rem 0;
    width: 100%;
    border: 1px solid #afafaf;
    border-radius: 0.25rem;

    &:focus {
      outline-color: ${(props) => props.theme.primary};
    }
  }

  .sign_up_btn {
    cursor: pointer;
    width: 100%;
    color: white;
    padding: 0.75rem 1.5rem;
    margin: 0.5rem 0;
    font-size: 1rem;
    border: transparent;
    background-color: ${(props) => props.theme.primary};
    border-radius: 0.25rem;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
      background-color: ${(props) => props.theme.primaryHover};
    }
  }

  .already_user {
    text-align: center;
    margin: 0.5rem 0;
  }

  .login_link {
    margin-left: 0.25rem;
    text-decoration: underline;
    color: ${(props) => props.theme.primary};
  }
`;
