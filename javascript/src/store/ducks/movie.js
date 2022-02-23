import { createActions, createReducer } from "reduxsauce"; 
import api from "../../services/api";

const categories = api;

export const { Types, Creators } = createActions({
    selectMovie: ["category", "movie"]
});

const INITIAL_STATE = {
    categories: [...categories],
    selectedCategory: "Categoria",
    selectedMovie: "Título do Filme",
}

export default createReducer(INITIAL_STATE, {
    [Types.SELECT_MOVIE]: (state, action) => ({
        ...state,
        selectedCategory: action.category.name,
        selectedMovie: action.movie.title
    })
});