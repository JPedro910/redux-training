import { createAction, createReducer } from "@reduxjs/toolkit"; 
import api from "../../services/api";

const categories = api;

const INITIAL_STATE = {
    categories: [...categories],
    selectedCategory: "Categoria",
    selectedMovie: "Título do Filme",
}

export const MoviesActions = {
    selectMovie: createAction("movie/select", (category, movie) => ( { payload: { category, movie } } ) )
}

export default createReducer(INITIAL_STATE, {
    [MoviesActions.selectMovie.type]: (state, action) => ({
        ...state,
        selectedCategory: action.payload.category.name,
        selectedMovie: action.payload.movie.title
    })
});