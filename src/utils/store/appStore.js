import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import newsDataReducer from './newsSlice';

const appStore = configureStore(
    {
        reducer: {
            userData: userReducer,
            newsData: newsDataReducer
        }
    }
)

export default appStore