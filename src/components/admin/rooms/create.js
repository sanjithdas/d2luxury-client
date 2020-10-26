/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 16:36:03
 * @modify date 2020-10-24 22:03:23
 * @desc [Create New Room - admin only]
 */
import React, { Component , useState} from 'react'

import
{ Row, Col, Form, Card, Button}
from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'

/**
 * imort footer
 * 
 */
import Footer from "../../FooterC";

export default class Create extends Component {
  render() {

    

    const onSubmit = e => {
       
      console.log( 'Submitted Auth');
       
    }

    const onChange = e => {
       
      console.log( 'Submitted Auth');
       
    }

    return (
      <div>
      <Row className="mt-5 mb-5">
     <Col md={6} className = 'mx-auto'>
       <Card>
         <Card.Body>
           <h1 className="text-center pb-4, pt-3">
             <FontAwesomeIcon icon='lock' className='text-primary' /> {' '} <span className='text-black'>Create New Room</span>
           </h1>

           <Form onSubmit={e => onSubmit(e)}>
             
            <Form.Group controlId="roomno">
            <Form.Label>Room number</Form.Label>
            <Form.Control 
            type="roomno" 
            placeholder="Enter room number" 
            name="roomno"
            
            onChange={e => onChange(e)}
            />
            </Form.Group>
            
            <Form.Group controlId="roomType">
            <Form.Label>Room Type</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter room type" 
            name="roomType"
            value=""
            onChange={e => onChange(e)}
            />
            </Form.Group>
            
            <Form.Group controlId="occupants">
            <Form.Label>Max. Occupants</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter Maximum Occupancy" 
            name="occupants"
            value=""
            onChange={e => onChange(e)}
            />
            </Form.Group>
            
            <Form.Group controlId="occupants">
            <Form.Label>Bed Types</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter bed type" 
            name="bedType"
            value=""
            onChange={e => onChange(e)}
            />
            </Form.Group>
            
            <Button type='submit' variant="black" className="btn-block">Create Room</Button>
           </Form>

         </Card.Body>
       </Card>
     </Col>
      
   </Row>
   
   </div>
    )
  }
}
