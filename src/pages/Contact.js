import React from "react";
import styled from "styled-components";

//images
import mapImg from "../images/map.png";

//icons
import { ReactComponent as PhoneIcon } from "../images/phone.svg";
import { ReactComponent as LocationIcon } from "../images/location.svg";
import { ReactComponent as EmailIcon } from "../images/email.svg";
import { ReactComponent as TimeIcon } from "../images/time.svg";

function Contact() {
  return (
    <Wrapper>
      {/*================= CONTACT INFO =================*/}
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

      {/*================= CONTACT FORM =================*/}
      <section className="contact_form">
        <h2 className="contact_form_title">Send me a message</h2>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFirstName(e.target.value)}
          />

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
          <textarea
            placeholder="Your Message"
            rows={7}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="submit_btn">
            Submit
          </button>
        </form>
      </section>
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.div`
  section {
    padding: 3rem 1.5rem;
    @media screen and (min-width: 768px) {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  }

  /* ================= CONTACT INFO =================*/
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

  /* ================= CONTACT FORM =================*/
  .contact_form {
    color: white;
    background-color: ${(props) => props.theme.secondary};
  }

  .contact_form_title {
    text-align: center;
  }

  form {
    @media screen and (min-width: 768px) {
      width: 40%;
      margin: 1rem auto;
    }
  }

  input,
  textarea {
    padding: 0.75rem 1.5rem;
    margin: 0.5rem 0;
    width: 100%;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 0.25rem;
    color: white;
    &::placeholder {
      color: white;
    }

    &:focus {
      outline-color: white;
    }
  }

  .name_inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .submit_btn {
    cursor: pointer;
    width: 100%;
    color: white;
    padding: 0.75rem 1.5rem;
    margin: 0.5rem 0;
    font-size: 1rem;
    border: transparent;
    background-color: ${(props) => props.theme.primary};
    border-radius: 0.25rem;
    transition: all 0.2s ease;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
      background-color: ${(props) => props.theme.primaryHover};
    }
  }
`;
