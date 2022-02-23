import api from "../../services/api";

const categories = api;

export const Types = {
    SELECT: "movie/SELECT"
}

const INITIAL_STATE = {
    categories: [...categories],
    selectedCategory: { name: "Categoria" },
    selectedMovie: { title: "Título do Filme" },
}

export const MovieReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        
        case Types.SELECT:
            return {
                ...state,
                selectedMovie: action.movie,
                selectedCategory: action.category
            }

        default: 
            return state;
    } 
};

export const Creators = {
    selectMovie: (category, movie) => ({
        type: Types.SELECT,
        category: category,
        movie: movie
    })
}