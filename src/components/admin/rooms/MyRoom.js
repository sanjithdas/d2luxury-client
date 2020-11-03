/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-03 13:28:05
 * @modify date 2020-11-03 13:33:41
 * @desc [Get the rooms belongs to the logged in users]
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import jwtDecode from "jwt-decode";

import { connect } from "react-redux";
import { deleteRoom } from "../../../actions/roomActions";
import { getAllMyRooms } from "../../../actions/roomActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class MyRoom extends Component {
  onShowClick = (e) => {
    console.log("OnShowClick");
    this.setState({ showRoomInfo: !this.state.showRoomInfo });
  };

  delClick = (id) => {
    console.log("delete: " + id);
    this.props.deleteRoom(id);
    const token = localStorage.FBIdToken;
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      this.props.getAllMyRooms(decodedToken.user_id);
    }
  };

  render() {
    // pull the variables from the props (as this is passed from the  component)

    const { roomno, imageUrl, roomType, roomRate, userId } = this.props.room;

    return (
      <div className="col-lg-6">
        <div className="room-wrap d-md-flex p-2 ">
          <a
            href="/"
            style={{ backgroundImage: "url(" + imageUrl + ")" }}
            className="img"
          >
            &nbsp;
          </a>
          <div className="half left-arrow d-flex align-items-center">
            <div className="text p-4 p-xl-5 text-center">
              <p className="star mb-0">
                <span className="ion-ios-star"></span>
                <span className="ion-ios-star"></span>
                <span className="ion-ios-star"></span>
                <span className="ion-ios-star"></span>
                <span className="ion-ios-star"></span>
              </p>
              <p className="mb-0">
                <span className="price mr-1">${roomRate}</span>{" "}
                <span className="per">per night </span>
              </p>
              <h3 className="mb-3">
                <Link to={`/room/details/${roomno}`}>{roomType}</Link>
              </h3>
              <p className="pt-1">
                <Link
                  to={`/room/details/${roomno}`}
                  className="btn-custom px-3 py-2"
                >
                  View Room Details{" "}
                  <span className="icon-long-arrow-right"></span>
                </Link>
              </p>
              <p className="pt-1">
                <Link
                  to={`/admin/room/edit/${roomno}`}
                  className="btn btn-custom px-3 py-2"
                >
                  <FontAwesomeIcon
                    icon="pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "primary",
                      position: "relative",
                    }}
                  ></FontAwesomeIcon>
                </Link>{" "}
                <div
                  className="ml-0 btn"
                  style={{
                    left: -30,
                    width: "50px",
                    height: "35px",
                    cursor: "pointer",
                    float: "right",
                    color: "red",
                    background: "#fff",
                    border: "1px  grey",
                    boxSizing: "border-box",
                    position: "relative",
                  }}
                >
                  <FontAwesomeIcon
                    icon="times"
                    style={{
                      cursor: "pointer",
                      color: "red",
                      position: "absolute",
                      top: "10px",
                      left: "20px",
                    }}
                    onClick={this.delClick.bind(this, userId)}
                  ></FontAwesomeIcon>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MyRoom.propTypes = {
  room: PropTypes.object.isRequired,
  // deleteRoom : PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
  rooms: state.room.rooms,
  authenticated: state.user.authenticated,
});
const mapActionsToProps = {
  deleteRoom,
  getAllMyRooms,
};

export default connect(mapStateToProps, mapActionsToProps)(MyRoom);

//export default Room
