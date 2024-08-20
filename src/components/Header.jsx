import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/store/userSlice';
import { useDispatch } from 'react-redux';
import Homepage from './Homepage';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';
import OfflinePage from '../utils/OfflinePage';

const Header = () => {
    // const paramValues = useParams();
    let location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onlineStatus = useOnlineStatus();
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, displayName, email } = user;
                dispatch(addUser({ uid, displayName, email }))
                setIsLoggedIn(true)
                navigate('/')
                // ...
            } else {
                dispatch(removeUser())
                setIsLoggedIn(false)
                navigate('/')
                // User is signed out
                // ...
            }
        });

        return () => unsubscribe();
    }, [dispatch, navigate])

    const handleLogout = () => {
        signOut(auth).then(() => {
            alert('user logged out!')
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    }

    return (
        <>
            <div className='flex justify-around cursor-pointer bg-gradient-to-b from-green-200'>
                <div className='logo font-bold text-3xl text-violet-400'>Baibhav-blog</div>
                <div className='flex'>
                    <ul className='flex'>
                        <li className='mx-2'><Link to='/'>Home</Link></li>
                        {!isLoggedIn && <li className='mx-2'><Link to='/sign-up'>Sign up</Link></li>}
                        {!isLoggedIn && <li className='mx-2'><Link to='/login'>Log in</Link></li>}
                    </ul>
                    {isLoggedIn && <button className='-mt-2.5' onClick={handleLogout}>Log out</button>}
                </div>
            </div>
            {onlineStatus ? location.pathname === '/' && <Homepage newsTagVal = 'Wall Street' /> : <OfflinePage />}
        </>

    );
}

export default Header;