import { createSlice } from "@reduxjs/toolkit";

import interstaller_director from "../../images/directors/interstellar.jpg";
import magadheera_director from "../../images/directors/magadheera.jpg";
import coco_director from "../../images/directors/coco.jpg";

const initialState = {
    lists: [
        {
            id: 1,
            name: "Interstellar Director",
            prfile_pic: interstaller_director,
            description:
                "This is content for Interstellar Director.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id: 2,
            name: "Coco Director",
            prfile_pic: coco_director,
            description:
                "This is content for Coco Director.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id: 3,
            name: "Magadheera Director",
            prfile_pic: magadheera_director,
            description:
                "This is content for Coco Director.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
    ],
    //   status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
    //   error: null,
};

export const DirectorSlice = createSlice({
    name: "directors",
    initialState,
    reducers: {},
});

export const selectAllDirectors = (state) => state.directors.lists;

export default DirectorSlice.reducer;