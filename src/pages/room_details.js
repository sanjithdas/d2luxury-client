/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-24 14:07:20
 * @modify date 2020-11-01 23:36:01
 * @desc [Individual Room Details]
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getRoom } from "../actions/roomActions";
import { loginUser } from "../actions/userActions"
import  HeaderImage  from "../components/HeaderImage";
import imgroom from '../images/room-3.jpg'
import imgroom_ from '../images/room-4.jpg'

import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class room_details extends Component {
  state = {
    userId: "",
    roomno: "",
    description:"",
    roomType: "",
    roomRate: "",
    imageUrl: "",
    occupants:"",
    errors: {},
  };

  componentWillReceiveProps(nextProps, nextState) {
    
    //const roomTypes = nextProps.room[0]
   // console.log(roomTypes);
    const {
      userId,
      roomno,
      description,
      roomType,
      roomRate,
      imageUrl,
      occupants,
      bedType
    } = nextProps.room[0];
    
    this.setState({
      // name is the same as name: name in this case
      userId,
      roomno,
      description,
      roomType,
      roomRate,
      imageUrl,
      occupants,
      bedType
    });
  }

  componentDidMount() {
    const { roomno } = this.props.match.params;
    console.log(this.props.match.params);
    this.props.getRoom(roomno);
    
  }

  render() {
    const {
      roomno,
      description,
      userId,
      imageUrl,
      roomType,
      bedType,
      occupants,
      roomRate,
    } = this.state;
    const {authenticated} = this.props.authenticated;
    return (
    
      <div>
        <HeaderImage />
        
  <section className="ftco-section">
   <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-md-12 ">
                       <div className="single-slider owl-carousel">

                          <Carousel>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={imageUrl}
                                alt="First slide"
                              />
                              <Carousel.Caption>
                                <h3></h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                              </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={imgroom}
                                alt=""
                              />

                              <Carousel.Caption>
                                <h3></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={imgroom_}
                                alt="Third slide"
                              />

                              <Carousel.Caption>
                                <h3></h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                              </Carousel.Caption>
                            </Carousel.Item>
                          </Carousel>       
                         {/* <div className="item">
                              <div className="room-img"
                               style={{backgroundImage: "url("+imageUrl+")" }} ></div>
                          </div> */}
                        </div>
                    </div>
                    <div className="col-md-12 room-single mt-4 mb-5 ">
                        <h2 className="mb-4">{roomType} <span></span></h2>
                       <p>{description}</p>
                       <div className="d-md-flex mt-5 mb-5">
                            <ul className="list">
                             <li><span>Max Occupants: {occupants}</span></li>
                             <li><span className="alert-danger">Size:</span> 45 m2</li>
                            </ul>
                             <ul className="list ml-md-5">
                              <li><span className="alert-danger">View:</span> Sea View</li>
                              <span>Bed Types:</span>
                              <span><i><b>{bedType}</b></i></span>
                              </ul>
                       </div>
                      <p>{description}.</p>
                  </div>

                    <div className="col-md-12 room-single mb-5 mt-4">
                      <h3 className="mb-4">Take A Tour</h3>
                      <div className="block-16" >
                          <figure >
                              <img src="http://d2luxury.me/images/room-1.jpg" alt="Image placeholder" className="img-fluid "/>
                              <a href="https://vimeo.com/45830194" className="play-button"><span className="icon-play"></span></a>
                          </figure>
                      </div>
                    </div>
                  </div> 
                 
                  <div className="block-16 mt-5" >
                      <figure >
                          <a href="http://d2luxury.me/booking/1">
                              <img src="http://d2luxury.me/images/bookmenow.jpg" className="btn-sm d-none" width="150px" height="50px" align="right"/>
                          </a>
                          <a href="http://d2luxury.me/reserve/1">
                              <div className="btn btn-primary font-weight-bold  text-center btn-sm d-none">Reserve</div>
                          </a>
                      </figure>
                  </div>
                </div>
               
            
            <div className="col-lg-4 sidebar">
                <div className="sidebar-box">
                    <form action="#" className="search-form">
                        <div className="form-group">
                            <span className="icon ion-ios-search"></span>
                            <input type="text" className="form-control" placeholder="Search..."/>
                        </div>
                    </form>
                </div>
                <div className="sidebar-box  ">
                    <div className="categories">
                        <h3>Facilities</h3>
                            <li><a href="#">Wi-Fi<span></span></a></li>
                            <li><a href="#">Power Backup<span></span></a></li>
                            <li><a href="#">News Paper<span></span></a></li>
                    </div>
                </div>

                <div className="sidebar-box ">
                    <h3>Recent Blog</h3>
                    <div className="block-21 mb-4 d-flex">
                        <a className="blog-img mr-4" style={{backgroundImage: 'url(http://d2luxury.me/../images/image_1.jpg)'}}></a>
                        <div className="text">
                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <div className="meta">
                                <div><a href="#"><span className="icon-calendar"></span> July 04, 2019</a></div>
                                <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="block-21 mb-4 d-flex">
                        <a className="blog-img mr-4" style={{backgroundImage:'url(http://d2luxury.me/../images/image_2.jpg)'}}></a>
                        <div className="text">
                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <div className="meta">
                                <div><a href="#"><span className="icon-calendar"></span> July 04, 2019</a></div>
                                <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="block-21 mb-4 d-flex">
                        <a className="blog-img mr-4" style={{backgroundImage: 'url(http://d2luxury.me/../images/image_3.jpg)'}}></a>
                        <div className="text">
                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <div className="meta">
                                <div><a href="#"><span className="icon-calendar"></span> July 04, 2019</a></div>
                                <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebar-box ">
                    <h3>Tag Cloud</h3>
                    <div className="tagcloud">
                        <a href="#" className="tag-cloud-link">dish</a>
                        <a href="#" className="tag-cloud-link">menu</a>
                        <a href="#" className="tag-cloud-link">food</a>
                        <a href="#" className="tag-cloud-link">sweet</a>
                        <a href="#" className="tag-cloud-link">tasty</a>
                        <a href="#" className="tag-cloud-link">delicious</a>
                        <a href="#" className="tag-cloud-link">desserts</a>
                        <a href="#" className="tag-cloud-link">drinks</a>
                    </div>
                </div>

                <div className="sidebar-box ">
                    <h3>Paragraph</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                </div>
              </div>
            </div>
          </div>
</section>
        
      </div>
    );
  }
}

room_details.propTypes = {
 // room: PropTypes.object.isRequired,
  getRoom: PropTypes.func.isRequired,
  // updateContact: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  room: state.room.room,
  authenticated: state.user.authenticated
});

const mapActionsToProps ={
  getRoom,
  loginUser
}
export default connect(mapStateToProps, {getRoom})(room_details);
