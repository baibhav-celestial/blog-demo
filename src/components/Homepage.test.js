import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSelector } from 'react-redux';
import useGetNewsData from '../utils/hooks/useGetNewsData';

// Mock the useGetNewsData hook
jest.mock('../utils/hooks/useGetNewsData');

// Mock useSelector to return mock news data
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

const mockNewsData = [
    { title: 'Wall Street News 1', source: { id: 'wsj' } },
    { title: 'Wall Street News 2', source: { id: 'wsj' } },
];

it('should render the Wall Street tag by default and display news on success', () => {
    const queryClient = new QueryClient();

    // Mock useGetNewsData to return success status
    useGetNewsData.mockReturnValue({
        status: 'pending',
        error: null,
    });

    // Mock useSelector to return mock news data
    useSelector.mockReturnValue(mockNewsData);

    render(
        <Provider store={appStore}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Homepage newsTagVal='Wall Street'/>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    );

    // Check if the selected tag is rendered correctly
    expect(screen.getByTestId('loader')).toBeInTheDocument();

});

it('should render the Wall Street tag by default and display news on success', () => {
    const queryClient = new QueryClient();

    // Mock useGetNewsData to return success status
    useGetNewsData.mockReturnValue({
        status: 'success',
        error: null,
    });

    // Mock useSelector to return mock news data
    useSelector.mockReturnValue(mockNewsData);

    render(
        <Provider store={appStore}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Homepage newsTagVal='Wall Street'/>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    );

    // Check if the selected tag is rendered correctly
    expect(screen.getByTestId('selected-tag')).toHaveTextContent('Wall Street');

    // Check if the news cards are rendered with the mock data
    expect(screen.getByText('Wall Street News 1')).toBeInTheDocument();
    expect(screen.getByText('Wall Street News 2')).toBeInTheDocument();
});
