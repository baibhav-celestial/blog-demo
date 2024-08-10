import React, { Component } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const PageNotFound = () => {
    const err = useRouteError();
    const navigate = useNavigate();
    return(
        <div>
            Opps! the page you're trying is not available.
            <div>
                {err.status + ' ' + err.statusText}
            </div>
            <button className='my-3 mx-2 bg-green-200 px-2 py-1 text-slate-500 rounded-lg' onClick={()=>navigate('/')}>Go Back To Home</button>

        </div>
    )
}

export default PageNotFound