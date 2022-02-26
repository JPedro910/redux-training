import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';

import movie from "./ducks/movie";

const store = configureStore({
    reducer: {
        movie: movie
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()