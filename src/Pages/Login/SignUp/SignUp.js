import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading';
import useToken from '../../../hooks/useToken';


const SignUp = () => {
    // const [token] = useToken(user)

    

    return (

        <div className='pt-5 full-Height'>
        <div className='m-5  mx-auto p-4 shadow-lg form-container'>
            <h3 className='text-center text-info mb-3'> Please Sign Up</h3>
            <Form>
                <Form.Group className="mb-1" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control  type="name" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Your email" required />
                </Form.Group>

                <Form.Group className="" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                    <Form.Label>
                    </Form.Label>

                </Form.Group>
                <Button className='w-75 mx-auto d-block' variant="info" type="submit">
                    Sign Up
                </Button>
                <p className='pt-1 mb-0'><small> Already have an account?<Link to='/login' className='text-primary font-weight-bold text-decoration-none pe-auto'> Sign In Now !</Link></small></p>
            </Form>

            <div className='d-flex align-items-center pt-0 mt-0'>
                <div style={{ height: '2px' }} className='w-100 bg-info'></div>
                <p className=' px-2 mb-2'>OR</p>
                <div style={{ height: '2px' }} className='w-100 bg-info'></div>
            </div>
            <button className='btn btn-whit w-75 text-wite mx-auto d-block my- bg-info'>
                <span className='px-2'>Google Sign In</span>
            </button>
        </div>
    </div>



    );
};

export default SignUp;