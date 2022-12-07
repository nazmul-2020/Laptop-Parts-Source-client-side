import React, { useRef } from 'react';
import { Button, Form, } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import useToken from '../../../hooks/useToken';

const Login = () => {
    // const [token] = useToken(user);
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }

    if (user || gUser) {
        console.log(user)
        navigate(from, { replace: true })
    }

    let errorElement;
    if (error || gError) {
        errorElement = <p className='text-danger'>Error: {error?.message||gError?.message}</p>
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
        console.log(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }

    return (

        <div className='pt-5 full-Height'>
            <div className='m-5  mx-auto p-4 shadow-lg form-container'>
                <h3 className='text-center text-info mb-3'> Please Sign In</h3>

                <Form onSubmit={handelSubmit} className='  '>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    {errorElement}
                    <Button className='w-75 mx-auto  d-block' variant="primary" type="submit">
                        Log In
                    </Button>
                    <p className='pt-2 mb-0'>Don’t have an account?<Link to='/signup' className='text-info font-weight-bold text-decoration-none pe-auto '> Sign Up Now !</Link></p>
                    <p><button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password?</button></p>
                </Form>

                <div className='d-flex align-items-center pt-0 mt-0'>
                    <div style={{ height: '2px' }} className='w-100 bg-info'></div>
                    <p className=' px-2 mb-2'>OR</p>
                    <div style={{ height: '2px' }} className='w-100 bg-info'></div>
                </div>
                <button onClick={() => signInWithGoogle()} className='btn btn-whit w-75 text-wite mx-auto d-block my- bg-info border-0'>
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default Login;