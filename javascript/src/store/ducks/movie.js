import { createAction, createReducer } from "@reduxjs/toolkit"; 

const INITIAL_STATE = {
    categories: [],
    selectedCategory: "Categoria",
    selectedMovie: "Título do Filme",
}

export const MovieActions = {
    addMovies: createAction("movie/ADD_MOVIES"),
    selectMovie: createAction("movie/SELECT_MOVIE", (category, movie) => ( { payload: { category, movie } } ) )
}

export default createReducer(INITIAL_STATE, {

    [MovieActions.addMovies.type]: (state, action) => ({
        ...state, 
        categories: action.payload
    }),

    [MovieActions.selectMovie.type]: (state, action) => ({
        ...state,
        selectedCategory: action.payload.category.name,
        selectedMovie: action.payload.movie.title
    })
});