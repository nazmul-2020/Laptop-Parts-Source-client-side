import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading';
// import useToken from '../../../hooks/useToken';


const SignUp = () => {
    // const [token] = useToken(user)
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user) {
        navigate('/')
        console.log(user)
    }

    const handelSignUp = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        console.log(name, email, password)
    }

    return (

        <div className='pt-5 full-Height'>
            <div className='m-5  mx-auto p-4 shadow-lg form-container'>
                <h3 className='text-center text-info mb-3'> Please Sign Up</h3>
                
                <Form onSubmit={handelSignUp}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Button className='w-75 mx-auto d-block' variant="primary" type="submit">
                        Sign Up
                    </Button>
                    <p className='pt-2 mb-0'>Already have an account?<Link to='/login' className='text-info text-decoration-none font-weight-bold'> Please Login</Link></p>
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