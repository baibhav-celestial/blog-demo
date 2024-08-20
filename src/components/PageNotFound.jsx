import React from 'react';
import { useLocation, useNavigate, useRouteError } from 'react-router-dom';

const PageNotFound = () => {
    const err = useRouteError();
    const navigate = useNavigate();
    const location = useLocation();
    const { message } = location.state;

    return (
        <div>
            Opps! the page you&apos;re trying is not available.
            {err && <div>
                {err.status + ' ' + err.statusText}
            </div>}
            {message && <div>{message}</div>}
            <button className='my-3 mx-2 bg-green-200 px-2 py-1 text-slate-500 rounded-lg' onClick={() => navigate('/')}>Go Back To Home</button>

        </div>
    )
}

export default PageNotFound