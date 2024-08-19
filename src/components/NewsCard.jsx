import React from 'react';
/* eslint-disable react/prop-types */
const NewsCard = ({data}) => {
    /* eslint-disable react/prop-types */
    const {author, description, title, url, urlToImage} = data;
    return ( 
        <div>
            <hr />
           <div className='flex justify-between mx-8 my-3 p-4 rounded-lg bg-gray-400/[0.15]' data-testid="news-card">
            <div>
            <h3>{title}</h3>
            <h5>{author}</h5>
            <p>{description}</p>
            <p><a className='text-green-300' href={url} target='/blank'>read more...</a></p>
            </div>
            <div>
            <img
                className='w-[200px] h-[150px]'
                src={urlToImage}
                alt='news-img'
            />
            </div>
           </div>
        </div>
     );
}
 
export default NewsCard;