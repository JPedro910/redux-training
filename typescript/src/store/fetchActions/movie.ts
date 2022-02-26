import { AppDispatch } from '../../store';

import api from "../../services/api";
import { MovieActions } from "../ducks/movie";

export const getMovies = () => {
    return (dispatch: AppDispatch) => {
        api
          .get("/categories")
          .then(({ data }) => dispatch(MovieActions.addMovies(data)) )
          .catch((response) => console.log(response) );
    }
}