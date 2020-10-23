import React, { Component , useState} from 'react'

import
{ Row, Col, Form, Card, Button}
from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'

export default class Login extends Component {
  render() {

    

    const onSubmit = e => {
       
      console.log( 'Submitted Auth');
       
    }

    const onChange = e => {
       
      console.log( 'Submitted Auth');
       
    }

    return (
      <Row className="mt-5">
     <Col md={6} className = 'mx-auto'>
       <Card>
         <Card.Body>
           <h1 className="text-center pb-4, pt-3">
             <FontAwesomeIcon icon='lock' className='text-primary' /> {' '} <span className='text-black'>Login</span>
           </h1>

           <Form onSubmit={e => onSubmit(e)}>
            <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            name="email"
            
            onChange={e => onChange(e)}
            />
            </Form.Group>
            <Form.Group controlId="password">
            <Form.Label>password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Enter your password" 
            name="password"
            value="{password}"
            onChange={e => onChange(e)}
            />
            </Form.Group>
            <Button type='submit' variant="black" className="btn-block">Login</Button>
           </Form>

         </Card.Body>
       </Card>
     </Col>
   </Row>
    )
  }
}
