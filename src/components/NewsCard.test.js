import React from 'react';
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NewsCard from "./NewsCard";
import appStore from '../utils/store/appStore';
import MockData from '../utils/MockData.json'



it('should render the news card',()=>{
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <NewsCard data={MockData}/>
            </BrowserRouter>
        </Provider>
    )
    expect(screen.getAllByTestId('news-card').length).toBe(1)
})