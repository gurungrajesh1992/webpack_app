import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    {
      id: "1",
      title: "Interstellar",
      content:
        "This is content Interstellar.This is content Interstellar.This is content Interstellar.This is content Interstellar.",
      director_id: "1",
      category_id: "1",
    },
    {
      id: "2",
      title: "Coco",
      content:
        "This is content Coco.This is content Coco.This is content Coco.This is content Coco.",
      director_id: "2",
      category_id: "2",
    },
    {
      id: "3",
      title: "Magadhira",
      content:
        "This is content Magadhira.This is content Magadhira.This is content Magadhira.This is content Magadhira.",
      director_id: "3",
      category_id: "3",
    },
  ],
  //   status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  //   error: null,
};

export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export const selectAlllists = (state) => state.movies.lists;

export default MovieSlice.reducer;
