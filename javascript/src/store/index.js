import { configureStore } from "@reduxjs/toolkit";

import movie from "./ducks/movie";

export default configureStore({
    reducer: {
        movie: movie
    }
});