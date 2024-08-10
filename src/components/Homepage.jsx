import React from 'react';
import { WALL_STREET_API } from '../utils/constant';
import useGetNewsData from '../utils/hooks/useGetNewsData';
import { useSelector } from 'react-redux';

const Homepage = () => {
    const { status, error } = useGetNewsData(WALL_STREET_API);

    const wallStreetData = useSelector((state) => state.newsData.wallStreet);

    if (status === 'pending') {
        return <div>Loading...</div>;
    }

    if (status === 'error') {
        return <div>Error: {error.message}</div>;
    }


    return wallStreetData && (
        <div>
            {wallStreetData.map((item, index) => <div key={index}>{item.title}</div>)}
        </div>
    );
}

export default Homepage;