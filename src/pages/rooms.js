/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:48:22
 * @modify date 2020-10-23 14:02:52
 * @desc [Rooms listing Page]
 */

import React from 'react'
 
const Rooms = () => {
  return (
  <div>

    <section className="ftco-section bg-light ftco-room">
      <div className="container-fluid px-0">
        
        <div className="row no-gutters justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ">
                <span className="subheading">D2Luxury Rooms</span>
                <h2 className="mb-4">Hotel Master's Rooms</h2>
            </div>
        </div>

        <div className="row no-gutters">
          
    			<div className="col-lg-6">
    				<div className="room-wrap">
    					<div className="img d-flex align-items-center item-header-img1">
    						<div className="text text-center px-4 py-4">
    							<h2>Welcome to <a href="index.html">D2luxury</a> Hotel</h2>
    							<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    						</div>
    					</div>
    				</div>
    			</div>

          <div className="col-lg-6">
            <div className="room-wrap d-md-flex p-2 ">
                <a href="http://d2luxury.me/rooms/1/3" className="img special-room-1"  ></a>
                <div className="half left-arrow d-flex align-items-center">
                    <div className="text p-4 p-xl-5 text-center">
                        <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
                        <p className="mb-0"><span className="price mr-1">352</span> <span className="per">per night</span></p>
                        <h3 className="mb-3"><a href="http://d2luxury.me/rooms/1/3">Deluxe Room</a></h3>
                        <p className="pt-1"><a href="http://d2luxury.me/rooms/1/3" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
                    </div>
                </div>
            </div>
          </div> 

          <div className="col-lg-6">
            <div className="room-wrap d-md-flex p-2 ">
                <a href="http://d2luxury.me/rooms/1/3" className="img special-room-2"  ></a>
                <div className="half left-arrow d-flex align-items-center">
                    <div className="text p-4 p-xl-5 text-center">
                        <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
                        <p className="mb-0"><span className="price mr-1">352</span> <span className="per">per night</span></p>
                        <h3 className="mb-3"><a href="http://d2luxury.me/rooms/1/3">Deluxe Room</a></h3>
                        <p className="pt-1"><a href="http://d2luxury.me/rooms/1/3" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
                    </div>
                </div>
            </div>
          </div>  

          <div className="col-lg-6">
            <div className="room-wrap d-md-flex p-2 ">
                <a href="http://d2luxury.me/rooms/1/3" className="img special-room-3"  ></a>
                <div className="half left-arrow d-flex align-items-center">
                    <div className="text p-4 p-xl-5 text-center">
                        <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
                        <p className="mb-0"><span className="price mr-1">352</span> <span className="per">per night</span></p>
                        <h3 className="mb-3"><a href="http://d2luxury.me/rooms/1/3">Deluxe Room</a></h3>
                        <p className="pt-1"><a href="http://d2luxury.me/rooms/1/3" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
                    </div>
                </div>
            </div>
          </div> 
         </div>
       </div>
    </section>
    </div>
  )
}

export default Rooms
