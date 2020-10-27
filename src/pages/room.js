import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { deleteRoom } from '../actions/roomActions';
import imgroom from '../images/room-1.jpg'

class Room extends Component {
  state = {
    showRoomInfo: false
  }
  
  onShowClick = e => {
    console.log('OnShowClick');
    this.setState({ showRoomInfo: !this.state.showRoomInfo });
  }
  
  delClick = id => {
    // Delete Contact
    console.log("delete: " + id);
    this.props.deleteRoom(id);
  }
  
  // This will render our contact object passed from contacts.
  render() {
    // pull the variables from the props (as this is passed from the Contacts component)
    
    const { roomno, description, imageUrl, userId , roomType, roomRate} = this.props.room;
   
    // Pull value out of the state.
    const { showRoomInfo } = this.state;
    return (
       
            <div className="col-lg-6">
              
             <div className="room-wrap d-md-flex p-2 ">
                <a style={{backgroundImage: "url("+imageUrl+")"}}   
                className="img"/>
                <div className="half left-arrow d-flex align-items-center">
                    <div className="text p-4 p-xl-5 text-center">
                        <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
                        <p className="mb-0"><span className="price mr-1">${roomRate}</span> <span className="per">per night</span></p>
                        <h3 className="mb-3"><Link to={`/room/details/${roomno}`}>{roomType}</Link></h3>
                        <p className="pt-1"><Link to={`/room/details/${roomno}`} className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></Link></p>
                    </div>
                </div>
               </div>
        </div>
     )
  }
}

Room.propTypes = {
  room: PropTypes.object.isRequired,
 // deleteRoom : PropTypes.func.isRequired
}

//export default connect(null, { deleteRoom })(Room)

export default Room