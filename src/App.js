import { Outlet, createBrowserRouter, useLocation, useNavigate } from 'react-router-dom';

import Header from './components/Header';
import { addUser, removeUser } from './utils/store/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import Homepage from './components/Homepage';

const App = () => {
  // let location = useLocation();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // useEffect(()=>{
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //           debugger
  //           // User is signed in, see docs for a list of available properties
  //           // https://firebase.google.com/docs/reference/js/auth.user
  //           const {uid, displayName, email} = user;
  //           dispatch(addUser({uid, displayName, email}))
  //           navigate('/')
  //           // ...
  //         } else {
  //             dispatch(removeUser())
  //             navigate('/')
  //           // User is signed out
  //           // ...
  //         }
  //       });

  //       return () => unsubscribe();
  // },[])
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
