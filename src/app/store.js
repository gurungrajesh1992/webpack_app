import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "../features/movies/MovieSlice";
import DirectorsSlice from "../features/directors/DirectorsSlice";
import CategorySlice from "../features/categories/CategorySlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    deirectors: DirectorsSlice,
    categories: CategorySlice,
  },
});
