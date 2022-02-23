import api from "../../services/api";

const categories = api;

const INITIAL_STATE = {
    categories: [...categories],
    selectedCategory: { name: "Categoria" },
    selectedMovie: { title: "Título do Filme" },
}

const MovieReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        
        case "SELECT_MOVIE":
            return {
                ...state,
                selectedMovie: action.movie,
                selectedCategory: action.category
            }

        default: 
            return state;
    } 
};

export default MovieReducer; 