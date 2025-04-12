import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>
              signup  
            </h2>
            <Form>
                <Form.Group>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control type="email" id="email"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control type="password" id="password"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='password-confirmation'>Password confirmation</Form.Label>
                    <Form.Control type="password" id="password-confirmation"/>
                </Form.Group>

                <Button variant="primary" type="submit"className='w-100 mt-3'> 
                   Signup
                </Button>
            </Form>
        </Card.Body>

    </Card>
    <div className='w-100 text-center mt-2'> 
        already have an account ? <Link to="/login">Login</Link>

    </div>
    </>
  )
}

export default Signup