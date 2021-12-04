import React from "react";
import styled from "styled-components";

//images
import heroImg from "../images/hero.jpg";
import aboutImg from "../images/about.jpg";
import mapImg from "../images/map.png";
import bookImg from "../images/background.jpg";

//icons
import { ReactComponent as PhoneIcon } from "../images/phone.svg";
import { ReactComponent as LocationIcon } from "../images/location.svg";
import { ReactComponent as EmailIcon } from "../images/email.svg";
import { ReactComponent as TimeIcon } from "../images/time.svg";

function Home() {
  return (
    <Wrapper>
      {/* ================= MAIN SECTION ================= */}
      <section className="main container">
        <div className="center_vertically">
          <h2 className="main_title">
            Because Your Smile <span className="underline">Is Precious</span>
          </h2>
          <p className="main_description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            harum alias consectetur totam nemo delectus.
          </p>
          <button href="/new-appointment" className="new_appointment">
            Make Appointment
          </button>
        </div>
        <div className="center_vertically">
          <img src={heroImg} alt="" />
        </div>
      </section>
      {/* ================= ABOUT SECTION ================= */}
      <section className="about">
        <div className="container about_container">
          <div className="center_vertically">
            <img src={aboutImg} alt="" className="about_img" />
          </div>
          <div className="center_vertically">
            <h2 className="about_title">
              I'm Dr. John Doe.
              <br />
              <span className="bold">Actually, I love to care Patient.</span>
            </h2>
            <p className="main_description">
              Lorem ipsum dolor sit amet{" "}
              <span className="paragraph_underline">
                consectetur adipisicing elit.
              </span>{" "}
              Saepe, quam alias nemo a animi, eos placeat incidunt ratione
              eveniet obcaecati, necessitatibus explicabo sapiente! Pariatur hic
              eos facilis odio nemo nisi.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              est harum molestias{" "}
              <span className="paragraph_underline">
                {" "}
                facilis saepe aliquid
              </span>{" "}
              rem quo at inventore sapiente perspiciatis obcaecati fugiat, sit
              eum soluta veritatis expedita deserunt voluptates!
              <br />
            </p>
            <button href="/contact" className="new_appointment">
              Let's Talk
            </button>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="services">
        <div className="container services_container">
          <div className="services_info">
            <h2 className="services_title ">
              Best Dental Services At Your Fingertips
            </h2>
            <p className="description ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              dignissimos cum facere corrupti, tempore dolorum laboriosam
              officiis beatae blanditiis saepe illo rerum maxime itaque facilis
              provident voluptatem doloribus laudantium laborum!
            </p>
          </div>
          <div className="dental_services">
            <div className="service">
              <h4 className="service_title">Service 1</h4>
              <div className="service_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                quo obcaecati rem ad nam fugiat alias qui nemo nihil nostrum.
              </div>
            </div>
            <div className="service">
              <h4 className="service_title">Service 1</h4>
              <div className="service_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                quo obcaecati rem ad nam fugiat alias qui nemo nihil nostrum.
              </div>
            </div>
            <div className="service">
              <h4 className="service_title">Service 1</h4>
              <div className="service_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                quo obcaecati rem ad nam fugiat alias qui nemo nihil nostrum.
              </div>
            </div>
            <div className="service">
              <h4 className="service_title">Service 1</h4>
              <div className="service_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                quo obcaecati rem ad nam fugiat alias qui nemo nihil nostrum.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION =================*/}
      <div className="contact">
        <section className="contact_container container">
          <div>
            <h5 className="contact_announcement">Now Open</h5>
            <h1 className="contact_title">Dental Clinic</h1>
            <p>
              We care about you teeth, so feel free to visit us during business
              hours.
            </p>
            <div className="contact_info">
              <LocationIcon className="contact_icon" />
              <div className="contact_description">
                <h4>Email Address</h4>
                <p>866 Balistreri Light Suite 937, Helgatown 93810-6364</p>
              </div>
            </div>
            <div className="contact_info">
              <PhoneIcon className="contact_icon" />

              <div className="contact_description">
                <h4>Phone</h4>
                <p>+ 504-558-3645</p>
              </div>
            </div>
            <div className="contact_info">
              <EmailIcon className="contact_icon" />
              <div className="contact_description">
                <h4>Email</h4>
                <p>email@contact.com</p>
              </div>
            </div>
            <div className="contact_info">
              <TimeIcon className="contact_icon" />
              <div className="contact_description">
                <h4>Openning Hours</h4>
                <p>Monday to Friday : 8 AM ---&gt; 4 PM</p>

                <p>Saturday : 8 AM ---&gt; 12 AM</p>
              </div>
            </div>
          </div>
          <div className="map_img_container"></div>
        </section>
      </div>

      {/* ================= MAKE APPOINTMENT SECTION =================*/}
      <section className="book">
        <h2>Book An Appintment Online</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
          tempora dolor minus delectus quis corrupti.
        </p>
        <button href="/new-appointment" className="new_appointment">
          Make Appointment
        </button>
      </section>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  section {
    padding: 3rem 1rem;
    @media screen and (min-width: 768px) {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  }

  /* ================= MAIN SECTION ================= */

  .main {
    margin-bottom: 6rem;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4rem;
      margin-bottom: 8rem;
    }
  }

  .main_title,
  .main_description {
    margin: 1rem 0;
  }

  .main_title {
    color: ${(props) => props.theme.secondary};
    @media screen and (min-width: 768px) {
      font-size: 3rem;
    }
  }

  .underline {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.primary};
    text-decoration-thickness: 2;
  }

  .new_appointment {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
      cursor: pointer;
      width: auto;
      color: white;
      padding: 0.75rem 1.5rem;
      font-size: 1.05rem;
      border: transparent;
      background-color: ${(props) => props.theme.primary};
      border-radius: 0.25rem;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
        background-color: ${(props) => props.theme.primaryHover};
      }
    }
  }

  /* ================= ABOUT SECTION ================= */
  .about {
    background-color: #f7f7f7;
  }

  .about_container {
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 4rem;
    }
  }

  .about_title {
    color: ${(props) => props.theme.secondary};
    font-weight: 500;
    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }
  }

  .bold {
    font-weight: 600;
    color: #151515;
  }

  .paragraph_underline {
    text-decoration: underline;
    font-weight: 500;
  }

  .about_img {
    height: 25rem;
  }

  /* ================= SERVICES SECTION ================= */
  .services {
    color: white;
    background-color: ${(props) => props.theme.secondary};
  }

  .services_info {
    & > * {
      margin-bottom: 1rem;
    }
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;

      & > * {
        margin-bottom: 0;
      }
    }
  }

  .services_title {
    font-size: 2.5rem;
  }

  .description {
    padding-top: 1rem;
  }

  .dental_services {
    margin-top: 3rem;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }
  }

  .service {
    margin: 1rem 0;
    padding: 3rem 1rem;
    border: 1px solid white;
    border-radius: 0.25rem;
    text-align: center;
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.secondary};
      box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
      background-color: white;
    }
  }

  .service_title {
    font-weight: 500;
    margin: 0.75rem 0;
  }

  .service_description {
    font-size: 0.9rem;
  }

  /* ================= CONTACT SECTION =================*/
  .contact {
    background-image: linear-gradient(
        to right,
        rgba(247, 247, 247, 1),
        rgba(247, 247, 247, 1),
        rgba(247, 247, 247, 0),
        rgba(247, 247, 247, 0),
        rgba(255, 255, 255, 0)
      ),
      url(${mapImg});
    background-size: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .contact_container {
    padding: 5rem 1.5rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
  }

  .contact_announcement {
    color: ${(props) => props.theme.primary};
  }

  .contact_title {
    color: ${(props) => props.theme.secondary};
    font-size: 2rem;
  }

  .contact_info {
    display: flex;
    gap: 1rem;
    margin: 1.5rem 0;
  }

  .contact_description {
    h3 {
      color: ${(props) => props.theme.secondary};
    }

    p {
      font-size: 0.95rem;
    }
  }

  .contact_icon {
    fill: ${(props) => props.theme.primary};
    width: 1.5rem;
  }

  /* ================= BOOKING SECTION =================*/
  .book {
    padding: 4rem 1rem;
    color: white;
    text-align: center;
    background-image: linear-gradient(
        rgba(97, 83, 204, 0.9),
        rgba(97, 83, 204, 0.9)
      ),
      url(${bookImg});
    background-size: 100%;
    background-size: cover;
    background-repeat: no-repeat;

    button {
      color: ${(props) => props.theme.primary};
      background-color: white;
      margin: 1rem auto 0;
      transition: all 0.2s ease;

      &:hover {
        cursor: pointer;
        color: white;
        background-color: ${(props) => props.theme.secondary};
        box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
      }
    }

    p {
      font-size: 0.9rem;
      margin: 1rem auto 2rem;
    }
  }
`;
