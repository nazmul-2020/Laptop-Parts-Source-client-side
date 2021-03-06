import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    if (user) {
        return (
            
            navigate(from, { replace: true })
        );
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-100 bg-primary'></div>
                <p className='pt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='w-100 bg-primary'></div>
            </div>
            {errorElement}
            <div>
                <div className=''>
                    <button onClick={() => signInWithGoogle()} className='btn  w-75 text-white mx-auto d-block my-3 bg-primary'>
                        <span className='px-2'>CONTINUE WITH GOOGLE</span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default SocialLogin;