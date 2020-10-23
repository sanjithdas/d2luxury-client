/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:48:22
 * @modify date 2020-10-23 16:31:25
 * @desc [About page]
 */

import React from "react";

/**
 * custom component insert
 */
import HeaderImage from "../components/HeaderImage";

import Footer from "../components/FooterC";

const Contact = () => {
  return (
    <section className="bg-light mt-0 mb-0">
      <HeaderImage />

      <div className="container">
        <div className="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div className="col-md-9  text-center d-flex align-items-end justify-content-center">
            <div className="text">
              <h1 className="mb-4 bread">Contact us</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section contact-section bg-light">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="h3">Contact Information</h2>
            </div>
            <div className="w-100"></div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Address:</span> 205 My street, Doveton Australia
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Phone:</span>{" "}
                  <a href="tel://1234567920">+ 1235 2355 98</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Email:</span>{" "}
                  <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Website</span> <a href="#">yoursite.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-6 order-md-last d-flex">
              <form action="#" className="bg-white p-5 contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>

            <div className="col-md-6 d-flex">
              <div id="map" className="bg-white">
                Google Map should display
              </div>
            </div>
          </div>
        </div>
      </section>

      <section></section>

      <section>
        <br></br>
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
