import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addWallStreet } from "../store/newsSlice";
import { useEffect } from "react";

const useGetNewsData = (data_url) => {
    const dispatch = useDispatch()
    const fetchNews = async () => {
        const res = await fetch(data_url);
        const data = await res.json();
        return data;
    }

    const {status, data, error} = useQuery({
        queryKey:['getNews'],
        queryFn: fetchNews,
    })

    useEffect(() => {
        if (status === 'success' && data) {
            dispatch(addWallStreet(data.articles));
        }
    }, [status, data, dispatch]);

    return { status, error };
}

export default useGetNewsData