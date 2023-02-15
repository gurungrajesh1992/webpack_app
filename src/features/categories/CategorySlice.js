import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lists: [
        {
            id: 1,
            title: "Space Movie",
        },
        {
            id: 2,
            title: "Animated Movie",
        },
        {
            id: 3,
            title: "Telugu Movie",
        }
    ]
}

export const CategorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
});

export const selectAllCategories = (state) => state.categories.lists;

export default CategorySlice.reducer;