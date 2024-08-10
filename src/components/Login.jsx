import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';

const Login = () => {
    let location = useLocation();
    const {pathname} = location;
    const email = useRef()
    const password = useRef()
    const userName = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log('signed in user is--->')

                    // navigate('/')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                   console.error(errorMessage)
                });
    }

    return ( 
        <div>
            <form
            className='absolute text-white p-12 bg-black/70 w-3/12 mx-auto my-auto right-0 left-0 top-1/3 sm:top-1/2 md:top-1/4 rounded-lg'
             onClick={handleSubmit}
            >
            <h3 className='absolute top-[10%] right-[50%]'>{pathname == '/login' ? 'Login' : 'Sign Up'}</h3>
                <br />
                <label className='my-3'>user email</label>
                <br />
                <input ref={email} className='my-3 p-1 text-black' placeholder='enter user email'></input>
                <br />
                <label className='my-3'>password</label>
                <br />
                <input ref={password} type='password' className='text-black p-1 my-3' placeholder='enter password'></input>
                <br />
                {pathname == '/login' && <button className='my-3 mx-2 bg-green-200 px-2 py-1 text-slate-500 rounded-lg'>submit</button>}
                
            </form>
        </div>
     );
}
 
export default Login;