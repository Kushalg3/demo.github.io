import React, { useEffect, useState } from "react";
import phonepic from "../images/phone.png";
import emailpic from "../images/email.png";
import locationpic from "../images/location.png";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    userDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userDetails = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    const data = await res.json();

    if (!data) {
      console.log("message not found");
    } else {
      alert("message Send");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <div className="contact bg-light">
        <div className="Container">
          <div className="contact-info">
            <div className="row justify-content-between">
              <div className="col-3 box px-2 py-3 bg-white row align-items-center">
                <div className="col-sm-3">
                  <img
                    src={phonepic}
                    id="phone-img"
                    className="me-1"
                    alt="phone_image"
                  />
                </div>
                <div className="col-sm-9">
                  <p className="contact-info-title">Phone</p>
                  <p className="contact-info-text">+916291294558</p>
                </div>
              </div>
              <div className="col-3 box px-2 py-3 bg-white row align-items-center">
                <div className="col-sm-3">
                  <img
                    src={emailpic}
                    id="phone-img"
                    className="me-1"
                    alt="phone_image"
                  />
                </div>
                <div className="col-sm-9">
                  <p className="contact-info-title">Email</p>
                  <p className="contact-info-text">kushalghoshk@gmail.com</p>
                </div>
              </div>
              <div className="col-3 box px-2 py-3 bg-white row align-items-center">
                <div className="col-sm-3">
                  <img
                    src={locationpic}
                    id="phone-img"
                    className="me-1"
                    alt="phone_image"
                  />
                </div>
                <div className="col-sm-9">
                  <p className="contact-info-title">Address</p>
                  <p className="contact-info-text">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <div className="contact-form box bg-white">
              <div className="container px-5 pt-3 pb-5">
                <div className="contact-form-title mb-4">
                  <h1>Get In Touch</h1>
                </div>
                <div className="contact-details">
                  <form method="POST" className="contact-details-form">
                    <input
                      type={"text"}
                      name="name"
                      id="name"
                      value={userData.name}
                      onChange={handleInputs}
                      placeholder="Your Name"
                      autoComplete="off"
                      required="true"
                    />
                    <input
                      type={"email"}
                      name="email"
                      id="email"
                      value={userData.email}
                      onChange={handleInputs}
                      placeholder="Your email"
                      autoComplete="off"
                      required="true"
                    />
                    <input
                      type={"tel"}
                      name="phone"
                      id="phone"
                      value={userData.phone}
                      onChange={handleInputs}
                      placeholder="Your phone no."
                      autoComplete="off"
                      required="true"
                    />
                  </form>
                </div>
                <div className="message-field">
                  <textarea
                    id="message"
                    name="message"
                    value={userData.message}
                    onChange={handleInputs}
                    placeholder="Write your problem...."
                  ></textarea>
                </div>
                <div className="submit">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={contactForm}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
