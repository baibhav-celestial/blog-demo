import React from 'react';
import { WALL_STREET_API } from '../utils/constant';
import useGetNewsData from '../utils/hooks/useGetNewsData';
import { useSelector } from 'react-redux';
import NewsCard from './NewsCard';
// import { BookLoader } from "react-awesome-loaders";
import RingLoader from "react-spinners/RingLoader";

const Homepage = () => {
    const { status, error } = useGetNewsData(WALL_STREET_API);

    const wallStreetData = useSelector((state) => state.newsData.wallStreet);

    if (status === 'pending') {
        return <div className='absolute top-[40%] left-[40%]'>
            <RingLoader
                color="black"
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />;
        </div>
    }

    if (status === 'error') {
        return <div>Error: {error.message}</div>;
    }


    return wallStreetData && (
        <div>
            {wallStreetData.map((item, index) => <NewsCard key={item.title + item.source.id} data={item} />)}
        </div>
    );
}

export default Homepage;