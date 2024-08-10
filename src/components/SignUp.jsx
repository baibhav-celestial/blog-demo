import React, { useRef } from 'react';
import Login from './Login';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/store/userSlice';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

    const email = useRef()
    const password = useRef()
    const userName = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        if ( email?.current?.value.length == 0 || password?.current?.value.length == 0) {

            return
           
        }
        createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(auth,'baibhav')
          updateProfile(user, {
            displayName: userName.current.value,
        }).then(() => {
            // Profile updated!

            // navigate('/browse')
            const { uid, displayName, email } = auth.currentUser;
            dispatch(addUser({ uid, displayName, email }))
            console.info('User profile updated with display name:', user.displayName);
            // navigate('/login')
            // ...
        }).catch((error) => {
            // An error occurred
            // setAuthError(error.errorMessage)
            console.error(error.message)
            // ...
        });
        //   dispatch()
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    


  
    return ( 
        <div>
          <form
            className='absolute  p-12 bg-black/70 w-3/12 mx-auto my-auto right-0 left-0 top-1/3 sm:top-1/2 md:top-1/4 rounded-lg'
             onClick={handleSubmit}
            >
            <h3 className='absolute top-[10%] right-[50%]'>Sign Up</h3>
                <br />
                <label className='my-3'>user name</label>
                <br />
                <input ref={userName} className='my-3 p-1' placeholder='enter user name'></input>
                <br />
                <label className='my-3'>user email</label>
                <br />
                <input ref={email} className='my-3 p-1' placeholder='enter user email'></input>
                <br />
                <label className='my-3'>password</label>
                <br />
                <input ref={password} type='password' className='my-3 p-1' placeholder='enter password'></input>
                <br />
                <button className='my-3 mx-2 bg-green-200 px-2 py-1 text-slate-500 rounded-lg'>submit</button>
                
            </form>
        </div>
     );
}
 
export default SignUp;