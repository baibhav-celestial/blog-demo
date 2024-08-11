import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
import { Provider } from 'react-redux';
import appStore from './utils/store/appStore';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Login = lazy(()=>import('./components/Login'));
const SignUp = lazy(()=>import('./components/SignUp'));


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element:<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>
      },
      {
        path: '/sign-up',
        element: <Suspense fallback={<div>Loading...</div>}><SignUp /> </Suspense>
      }
    ],
    errorElement: <PageNotFound />
  }
])
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
