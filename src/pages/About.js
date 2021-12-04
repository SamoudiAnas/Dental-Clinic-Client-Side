import React from "react";
import styled from "styled-components";

//images
import dentalChair from "../images/dentalChair.jpg";

function About() {
  return (
    <Wrapper>
      <div className="title_container">
        <div className="container">
          <h3>About</h3>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;

const Wrapper = styled.div`
  .title_container {
    padding: 3rem 0;
    background-image: url(${dentalChair});

    h3 {
      padding: 0 1rem;
    }
  }
`;
