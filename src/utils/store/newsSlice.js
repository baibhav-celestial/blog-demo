import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice(
    {
        name: 'newsSlice',
        initialState: {
            wallStreet: null,
            testNews: null,
        },
        reducers: {
            addWallStreet: (state, action) => {
                state.testNews = null
                state.wallStreet = action.payload;
            },
            addTeslaNews: (state, action) => {
                state.wallStreet = null
                state.testNews = action.payload;
            }
        }
    }
)

export const {addWallStreet, addTeslaNews} = newsSlice.actions;
export default newsSlice.reducer;