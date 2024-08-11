import React, { useEffect, useState } from 'react';
import { TESLA_NEWS_API, WALL_STREET_API } from '../utils/constant';
import useGetNewsData from '../utils/hooks/useGetNewsData';
import { useSelector } from 'react-redux';
import NewsCard from './NewsCard';
import RingLoader from "react-spinners/RingLoader";
import PageNotFound from './PageNotFound';
import { useNavigate } from 'react-router-dom';

const Homepage = ({ newsTagVal }) => {
    const allTags = ['Wall Street', 'Tesla News', 'Technology']
    const [selectedTag, setSelectedTag] = useState('Wall Street' || newsTagVal)
    const navigate = useNavigate();
    const apiMap = {
        'Wall Street': WALL_STREET_API,
        'Tesla News': TESLA_NEWS_API,
    };
    const { status, error } = useGetNewsData(apiMap[selectedTag], selectedTag);

    const newsBlog = useSelector((state) => {
        switch (selectedTag) {
            case 'Tesla News': return state.newsData.testNews;
            case 'Technology': return state.newsData.techNews;
            // case 'Wall Street': return state.newsData.wallStreet;
            default: return state.newsData.wallStreet;
        }
    });

    useEffect(() => {
        // Your useGetNewsData hook will be called whenever selectedTag changes
    }, [selectedTag, newsTagVal]);

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
        return (
            <div>

                {navigate('/error page', {
                    state: { message: error.message }
                })}
            </div>
        )
    }

    return newsBlog && (
        <div>
            {/* make this list as li and then set the on click bg color different and selected value will be set in useState for API call  */}
            {/* <div className='mx-4 my-2 cursor-pointer'>{allTags.map((item, index)=><span className='mx-2 bg-slate-400 rounded-xl p-1' key={index} onClick={()=> setSelectedTag(item)}>{item}</span>)}</div> */}
            <div className='mx-4 my-2'>
                <ul className='flex' onClick={(e) => {
                    if (e.target.tagName === 'LI') setSelectedTag(e.target.textContent)
                }}>
                    {allTags.map((item, index) => <li className={`cursor-pointer mx-2 ${selectedTag == item ? 'bg-blue-300' : 'bg-slate-400'}   rounded-xl p-1`} key={index} name={item}>{item}</li>)}
                </ul>
            </div>
            {newsBlog.map((item, index) => <NewsCard key={item.title + item.source.id} data={item} />)}
        </div>
    );
}

export default Homepage;