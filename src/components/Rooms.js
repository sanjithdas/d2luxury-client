/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:48:22
 * @modify date 2020-10-23 22:10:37
 * @desc [Room component - listing all the rooms]
 */

 
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"; //impt



/**
 * custom component insert
 */
import  HeaderImage  from "../components/HeaderImage";
import RoomsPage from "../pages/rooms";
import Footer from "./FooterC"


const Rooms = () => {
 
  return (
    <section className="bg-light mt-0">
      <HeaderImage />
      <RoomsPage />
      <Footer />
    </section>
  );
};

export default Rooms;
