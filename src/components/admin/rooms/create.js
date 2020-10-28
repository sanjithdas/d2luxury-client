/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 16:36:03
 * @modify date 2020-10-29 09:24:01
 * @desc [Create New Room - admin only]
 */
import { connect } from "react-redux";
import React, { Component } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from 'classnames';
import PropTypes from "prop-types";
import { addRoom } from "../../../actions/roomActions";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      roomno: "",
      roomType: "",
      occupants: "",
      bedType: "",
      roomRate:'',
      errors: {},
    };
  }

  /**
   * {validate data on submit the form}
   * @param  e 
   */
  onSubmit = (e) => {
    
    e.preventDefault();
    if (this.state.roomno===''){
      this.setState({
        errors: {roomno:"Room no. cannot be empty"}
       
      })
      return;
    }
    if (this.state.roomType===''){
      this.setState({
        errors: {roomType:"Room type cannot be empty"}
      })
      return;
    }
    
    if (this.state.occupants===''){
      this.setState({
        errors: {occupants:"Occupants cannot be empty"}
      })
      return;
    }
    if (this.state.bedType===''){
      this.setState({
        errors: {bedType:"Occupants cannot be empty"}
      })
      return;
    }
    if (this.state.roomRate===''){
      this.setState({
        errors: {roomRate:"Rate cannot be empty"}
      })
      return;
    }
    
    // create a new room object
    const newRoom = {
      roomno: this.roomno,
      roomType: this.roomType,
      occupants: this.occupants,
      bedType: this.bedType,
      rate: this.rate
     }
     this.props.addRoom(newRoom);
    
  };
// on change form set the component state
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    //const { roomno, roomType , occupants, bedType  , phone, errors } = this.state;
    return (
      <div>
        <Row className="mt-5 mb-5">
          <Col md={6} className="mx-auto">
            <Card>
              <Card.Body>
                <h1 className="text-center pb-4, pt-3">
                  <FontAwesomeIcon icon="lock" className="text-primary" />{" "}
                  <span className="text-black">Create New Room</span>
                </h1>

                <Form onSubmit={this.onSubmit}>
                  <Form.Group controlId="roomno">
                    <Form.Label>Room number</Form.Label>
                    <Form.Control
                      type="roomno"
                      placeholder="Enter room number"
                      name="roomno"
                      className={classnames("form-control", { 'is-invalid' : this.state.errors.roomno })  }
                      value={this.state.roomno}
                      onChange={this.onChange}
                    />
                     {this.state.errors.roomno && <div className='invalid-feedback'>{this.state.errors.roomno}</div>}
                  </Form.Group>

                  <Form.Group controlId="roomType">
                    <Form.Label>Room Type</Form.Label>
                    <Form.Control
                      type="text"
                      
                      placeholder="Enter room type"
                      name="roomType"
                      className={classnames("form-control", { 'is-invalid' : this.state.errors.roomType })  }
                      value={this.state.roomType}
                      onChange={this.onChange}
                    />
                    {this.state.errors.roomType && <div className='invalid-feedback'>{this.state.errors.roomType}</div>}
                  </Form.Group>

                  <Form.Group controlId="occupants">
                    <Form.Label>Max. Occupants</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Maximum Occupancy"
                      name="occupants"
                      value={this.state.occupants}
                      onChange={this.onChange}
                      className={classnames("form-control", { 'is-invalid' : this.state.errors.occupants })  }
                    />
                      {this.state.errors.occupants && <div className='invalid-feedback'>{this.state.errors.occupants}</div>}
                  </Form.Group>

                  <Form.Group controlId="bedType">
                    <Form.Label>Bed Types</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter bed type"
                      name="bedType"
                      value={this.state.bedType}
                      onChange={this.onChange}
                      className={classnames("form-control", { 'is-invalid' : this.state.errors.bedType })  }
                    />
                    {this.state.errors.bedType && <div className='invalid-feedback'>{this.state.errors.bedType}</div>}
                  </Form.Group>

                  <Form.Group controlId="rate">
                    <Form.Label>Rate</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Room Type"
                      name="roomRate"
                      value={this.state.rate}
                      onChange={this.onChange}
                      className={classnames("form-control", { 'is-invalid' : this.state.errors.rate })  }
                    />
                    {this.state.errors.rate && <div className='invalid-feedback'>{this.state.errors.rate}</div>}
                  </Form.Group>

                  <Button type="submit" variant="black" className="btn-block">
                    Create Room
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Create.propTypes = {
  addRoom: PropTypes.func.isRequired,
};

export default connect(null, { addRoom })(Create);
