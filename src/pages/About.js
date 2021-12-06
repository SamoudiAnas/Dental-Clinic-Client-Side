import React from "react";
import styled from "styled-components";

//images
import dentalChair from "../images/dentalChair.jpg";
import Dentist from "../images/Dentist.jpg";

import { ReactComponent as Service1Icon } from "../images/service1.svg";

function About() {
  return (
    <Wrapper>
      <div className="title_container">
        <div className="container">
          <h2>About</h2>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ex
            dolore doloribus fugiat magni sed voluptatem iusto porro eum cumque
            ratione beatae mollitia volup.
          </p>
        </div>
      </div>
      <div className="about_me container">
        <div className="center_vertically">
          <h1>Hello again!</h1>
          <p>
            I'm <span>John Doe</span>, sequi saepe a illum omnis porro quam
            consequatur magnam amet quaerat soluta nihil, illo suscipit, quasi
            magni provident laboriosam commodi tempora nesciunt? Lorem ipsum
            dolor sit amet consectetur, adipisicing elit.
            <br />
            <br />
            Quasi magni provident laboriosam commodi tempora nesciunt? Lorem
            ipsum dolor sit amet consectetur, adipisicing elit.Nulla
            pellentesque, urna vitae malesuada tristique, lorem nunc pharetra
            lacus, vel accumsan ipsum odio at nibh.
            <br />
            <br /> Cras fringilla, sem non euismod suscipit, arcu nulla
            elementum tellus, at lacinia nibh sem ultrices elit. Etiam
            tincidunt.
          </p>
          <div className="services">
            <div className="service">
              <div className="service_icon_container">
                <Service1Icon className="service_icon" />
              </div>
              <h4 className="service_title">Service 1</h4>
            </div>
            <div className="service">
              <div className="service_icon_container">
                <Service1Icon className="service_icon" />
              </div>
              <h4 className="service_title">Service 1</h4>
            </div>
            <div className="service">
              <div className="service_icon_container">
                <Service1Icon className="service_icon" />
              </div>
              <h4 className="service_title">Service 1</h4>
            </div>
            <div className="service">
              <div className="service_icon_container">
                <Service1Icon className="service_icon" />
              </div>
              <h4 className="service_title">Service 1</h4>
            </div>
          </div>
        </div>
        <div className="img_container">
          <div className="img center_vertically">
            <img src={Dentist} alt="Dentist" />
          </div>
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
    background-color: ${(props) => props.theme.secondary};
    background-blend-mode: multiply;

    h2 {
      color: white;
      text-align: center;
      letter-spacing: 1px;
      padding: 0 1rem;
    }

    p {
      color: white;
      text-align: center;
      padding: 1rem 3rem 0;
      font-size: 0.9rem;
      font-style: italic;
    }
  }

  .about_me {
    padding: 3rem 1rem;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 3fr 2fr;
      gap: 4rem;
    }

    h1 {
      padding-bottom: 1rem;
      color: ${(props) => props.theme.secondary};
    }

    p {
      span {
        text-decoration: underline;
        font-weight: 500;
        color: ${(props) => props.theme.primary};
      }
    }

    .img_container {
      position: relative;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        padding: 1rem;
        border: 1px solid ${(props) => props.theme.secondary};
      }
    }
  }

  .services {
    margin: 2rem 0;
    background-color: ${(props) => props.theme.secondary};
    padding: 4rem 2rem;
    border-top-left-radius: 5rem;
    border-bottom-right-radius: 5rem;
    @media screen and (min-width: 768px) {
      display: flex;

      gap: 1rem;
    }
  }

  .service {
    width: 25%;
  }

  .service_icon_container {
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    border-radius: 9999px;
    background-color: white;

    .service_icon {
      fill: ${(props) => props.theme.primary};
      width: 1.6rem;
    }
  }

  .service_title {
    color: white;
    text-align: center;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;
