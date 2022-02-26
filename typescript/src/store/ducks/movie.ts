import { createAction, createReducer } from "@reduxjs/toolkit"; 

export type CategoryTypes = {
    id: number;
    name: string;
    movies: Array<MovieTypes>;
}

export type MovieTypes = {
    id: number;
    title: string;
    released: string;
}

const INITIAL_STATE = {
    categories: [],
    selectedCategory: "Categoria",
    selectedMovie: "Título do Filme",
}

export const MovieActions = {
    addMovies: createAction("movie/ADD_MOVIES", (categories: CategoryTypes) => ( { payload: categories } ) ),
    selectMovie: createAction("movie/SELECT_MOVIE", (category: CategoryTypes, movie: MovieTypes) => ( 
        { payload: { category, movie } } 
    ) )
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