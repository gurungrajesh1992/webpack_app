import { createSlice } from "@reduxjs/toolkit";

import interstaller from "../../images/interstaller.jpg";
import magadheera from "../../images/Magadheera.jpg";
import coco from "../../images/coco.jpg";

const initialState = {
  lists: [
    {
      id: "1",
      title: "Interstellar",
      image: interstaller,
      content:
        "This is content Interstellar.This is content Interstellar.This is content Interstellar.This is content Interstellar.",
      director_id: "director1",
      category_id: "category1",
    },
    {
      id: "2",
      title: "Coco",
      image: coco,
      content:
        "This is content Coco.This is content Coco.This is content Coco.This is content Coco.",
      director_id: "director2",
      category_id: "category2",
    },
    {
      id: "3",
      title: "Magadhira",
      image: magadheera,
      content:
        "This is content Magadhira.This is content Magadhira.This is content Magadhira.This is content Magadhira.",
      director_id: "director3",
      category_id: "category3",
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
