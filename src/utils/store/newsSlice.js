import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice(
    {
        name: 'newsSlice',
        initialState: {
            wallStreet: null,
        },
        reducers: {
            addWallStreet: (state, action) => {
                state.wallStreet = action.payload;
            },
        }
    }
)

export const {addWallStreet} = newsSlice.actions;
export default newsSlice.reducer;