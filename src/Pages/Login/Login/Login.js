import React, { useRef } from 'react';
import { Button, Form, } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
// import useToken from '../../../hooks/useToken';

const Login = () => {
    // const [token] = useToken(user);

    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

    if (user) {
        console.log(user);
    }

    return (

        <div className='pt-5 full-Height'>
            <div className='m-5  mx-auto p-4 shadow-lg form-container'>
                <h3 className='text-center text-info mb-3'> Please Sign In</h3>

                {/* <Form>
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
                        Log In
                    </Button>
                    <p className='pt-2 mb-0'>Don’t have an account?<Link to='/signup' className='text-primary font-weight-bold text-decoration-none pe-auto'> Sign Up Now !</Link></p>
                    <p><button className='btn btn-link text-danger pe-auto ' >Reset Password?</button></p>
                </Form> */}
                <div className='d-flex align-items-center pt-0 mt-0'>
                    <div style={{ height: '2px' }} className='w-100 bg-info'></div>
                    <p className=' px-2 mb-2'>OR</p>
                    <div style={{ height: '2px' }} className='w-100 bg-info'></div>
                </div>
                <button onClick={() => signInWithGoogle()} className='btn btn-whit w-75 text-wite mx-auto d-block my- bg-info'>
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default Login;