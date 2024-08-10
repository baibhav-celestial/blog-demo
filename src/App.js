import { Outlet, createBrowserRouter, useLocation, useNavigate } from 'react-router-dom';

import Header from './components/Header';
import { addUser, removeUser } from './utils/store/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
