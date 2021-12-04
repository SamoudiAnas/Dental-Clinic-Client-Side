import React, { useState } from "react";
import styled from "styled-components";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Wrapper className="container">
      <h2 className="sign_title">
        Welcome to <span>The Dental</span>
      </h2>
      <form>
        <div className="name_inputs">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName}
          />
        </div>

        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" className="sign_up_btn">
          Create Account
        </button>
      </form>

      <p className="already_user">
        Already have an account?
        <a href="/sign-in" className="login_link">
          Login
        </a>
      </p>
    </Wrapper>
  );
}

export default SignUp;

const Wrapper = styled.div`
  padding: 3rem 1rem;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  .sign_title {
    text-align: center;
    margin-bottom: 2rem;
    span {
      font-weight: 700;
      color: ${(props) => props.theme.primary};
    }
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

  .name_inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
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
