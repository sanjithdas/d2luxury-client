/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 16:36:03
 * @modify date 2020-11-05 18:12:37
 * @desc [Create New Room - admin only]
 */
import { connect } from "react-redux";
import React, { Component } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import PropTypes from "prop-types";
import {
  addRoom,
  updateRoom,
  getRoom,
  addRoomImage,
} from "../../../actions/roomActions";

class EditRoom extends Component {
  state = {
    roomno: "",
    roomType: "",
    occupants: "",
    bedType: "",
    roomRate: "",
    description: "",
    errors: {},
    userId: "",
  };

  componentWillReceiveProps(nextProps, nextState) {
    // userId = nextProps.room[0].userId;

    const {
      roomno,
      description,
      roomType,
      roomRate,
      imageUrl,
      occupants,
      bedType,
      userId,
    } = nextProps.room[0];

    console.log(userId);

    this.setState({
      roomno,
      description,
      roomType,
      roomRate,
      imageUrl,
      occupants,
      bedType,
      userId,
    });

    console.log(roomType);
  }
  componentWillMount() {
    const { roomno } = this.props.match.params;
    this.props.getRoom(roomno);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // on image select
  onImageChange = (e) => {
    let file = e.target.files[0];

    this.setState({
      imageUrl: file,
    });
  };

  /**
   * {validate data on submit the form}
   * @param  e
   */
  onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const {
      roomno,
      roomType,
      occupants,
      bedType,
      roomRate,
      description,
      userId,
    } = this.state;

    if (roomno === "") {
      this.setState({
        errors: { roomno: "Room no. cannot be empty" },
      });
      return;
    }
    if (roomType === "") {
      this.setState({
        errors: { roomType: "Room type cannot be empty" },
      });
      return;
    }

    if (occupants === "") {
      this.setState({
        errors: { occupants: "Occupants cannot be empty" },
      });
      return;
    }
    if (bedType === "") {
      this.setState({
        errors: { bedType: "Bed type cannot be empty" },
      });
      return;
    }
    if (roomRate === "") {
      this.setState({
        errors: { roomRate: "Rate cannot be empty" },
      });
      return;
    }
    if (description === "") {
      this.setState({
        errors: { description: "Description cannot be empty" },
      });
      return;
    }

    formData.append("image", this.state.imageUrl);
    console.log(this.props.room.roomId);
    formData.append("docId", this.props.room[0].userId);

    // create a new room object
    const updRoom = {
      roomno,
      roomType,
      occupants,
      bedType,
      roomRate,
      description,
      userId,
    };

    this.props.updateRoom(updRoom);
    this.props.addRoomImage(formData, this.props.room[0].userId);
    this.props.getRoom(roomno);
    this.props.history.push("/admin/room/show");
    // this.props.history.push("admin/room/show");
  };
  // on change form set the component state

  render() {
    const {
      roomno,
      roomType,
      occupants,
      bedType,
      roomRate,
      description,
    } = this.state;
    // console.log(this.props.room.roomno);
    return (
      <div>
        <Row className="mt-5 mb-5">
          <Col md={3} className="mx-auto"></Col>
          <Col md={6} className="mx-auto">
            <Card>
              <Card.Body>
                <h1 className="text-center pb-4 pt-3">
                  <FontAwesomeIcon icon="lock" className="text-primary" />{" "}
                  <span className="text-black">Edit Room</span>
                </h1>

                <Form onSubmit={this.onSubmit} enctype="multipart/form-data">
                  <Form.Group controlId="roomno">
                    <Form.Label>Room number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter room number"
                      name="roomno"
                      className={classnames("form-control", {
                        "is-invalid": this.state.errors.roomno,
                      })}
                      value={roomno}
                      onChange={this.onChange}
                    />
                    {this.state.errors.roomno && (
                      <div className="invalid-feedback">
                        {this.state.errors.roomno}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group controlId="roomType">
                    <Form.Label>Room Type</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter room type"
                      name="roomType"
                      className={classnames("form-control", {
                        "is-invalid": this.state.errors.roomType,
                      })}
                      value={roomType}
                      onChange={this.onChange}
                    />
                    {this.state.errors.roomType && (
                      <div className="invalid-feedback">
                        {this.state.errors.roomType}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group controlId="occupants">
                    <Form.Label>Max. Occupants</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Maximum Occupancy"
                      name="occupants"
                      value={occupants}
                      onChange={this.onChange}
                      className={classnames("form-control", {
                        "is-invalid": this.state.errors.occupants,
                      })}
                    />
                    {this.state.errors.occupants && (
                      <div className="invalid-feedback">
                        {this.state.errors.occupants}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group controlId="bedType">
                    <Form.Label>Bed Types</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter bed type"
                      name="bedType"
                      value={bedType}
                      onChange={this.onChange}
                      className={classnames("form-control", {
                        "is-invalid": this.state.errors.bedType,
                      })}
                    />
                    {this.state.errors.bedType && (
                      <div className="invalid-feedback">
                        {this.state.errors.bedType}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group controlId="roomRate">
                    <Form.Label>Rate</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter room rate"
                      name="roomRate"
                      value={roomRate}
                      onChange={this.onChange}
                      className={classnames("form-control", {
                        "is-invalid": this.state.errors.roomRate,
                      })}
                    />
                    {this.state.errors.roomRate && (
                      <div className="invalid-feedback">
                        {this.state.errors.roomRate}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group controlId="description">
                    <Form.Label>Enter the room description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      value={description}
                      onChange={this.onChange}
                      className={classnames("form-control", {
                        "is-invalid": this.state.errors.description,
                      })}
                    />
                    {this.state.errors.description && (
                      <div className="invalid-feedback">
                        {this.state.errors.description}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group controlId="imageUrl">
                    <input
                      type="file"
                      name="imageUrl"
                      onChange={this.onImageChange}
                      accept="image/*"
                    />
                  </Form.Group>

                  <Button type="submit" variant="black" className="btn-block">
                    Update
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mx-auto">
            <a className="btn btn-black text-white" href="/admin/room/show">
              My Rooms
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

EditRoom.propTypes = {
  getRoom: PropTypes.func.isRequired,
  addRoom: PropTypes.func.isRequired,
  updateRoom: PropTypes.func.isRequired,
  addRoomImage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  authenticated: state.user.authenticated,
  room: state.room.room,
});

const mapActionsToProps = {
  addRoom,
  updateRoom,
  getRoom,
  addRoomImage,
};

export default connect(mapStateToProps, mapActionsToProps)(EditRoom);
