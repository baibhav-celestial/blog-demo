import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addTeslaNews, addWallStreet } from "../store/newsSlice";
import { useEffect } from "react";

const useGetNewsData = (data_url, newsTag) => {
    const dispatch = useDispatch()
    const fetchNews = async () => {
        const res = await fetch(data_url);
        const data = await res.json();
        return data;
    }

    const {status, data, error} = useQuery({
        queryKey: ['getNews', data_url, newsTag],
        queryFn: fetchNews,
    })

    useEffect(() => {
        if (status === 'success' && data) {
            switch(newsTag) {
                case 'Tesla News': dispatch(addTeslaNews(data.articles));
                break;
                default: dispatch(addWallStreet(data.articles));
            }
            
        }
    }, [status, data, dispatch, newsTag, data_url]);

    return { status, error };
}

export default useGetNewsData