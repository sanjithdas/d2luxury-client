/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:48:22
 * @modify date 2020-11-01 23:45:23
 * @desc [Room component - listing all the rooms of a registered user]
 */
// React stuff

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

/**
 * custom component insert
 */
import MyRoomsPage from "../../admin/rooms/MyRooms";
import { getRooms, getAllMyRooms } from "../../../actions/roomActions";
import HeaderImage from "../../HeaderImage";

class Show extends Component {
  render() {
    const { rooms } = this.props;
    return (
      <section className="bg-light mt-0">
        <HeaderImage />
        <MyRoomsPage />
      </section>
    );
  } // End of Render
}

Show.propTypes = {
  //shortcut ptfr and ptar
  getRooms: PropTypes.func.isRequired,
  getAllMyRooms: PropTypes.func.isRequired,
  rooms: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  rooms: state.room.rooms,
  authenticated: state.user.authenticated,
});

const mapActionsToProps = {
  getRooms,
  getAllMyRooms,
};

export default connect(mapStateToProps, mapActionsToProps)(Show);
