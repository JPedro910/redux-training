import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { RootState, useAppDispatch } from '../../store';
import { MovieActions, CategoryTypes, MovieTypes } from "../../store/ducks/movie";
import { getMovies } from "../../store/fetchActions/movie";

const Sidebar = () => {

    const dispatch = useAppDispatch();
    const categories = useSelector((state: RootState) => state.movie.categories);
    const { selectMovie } = bindActionCreators(MovieActions, dispatch);

	useEffect( () => dispatch(getMovies()), [ dispatch ] );

    return ( 
        <>
            <aside>
                {
                    categories.map((category: CategoryTypes) => (
                        <div key={category.id}>
                            <h3>{category.name}</h3>
                            <ul>
                                {category.movies.map((movie: MovieTypes) => (
                                    <li key={movie.id}>
                                        {movie.title} was released in {movie.released}
                                        <button onClick={() => dispatch(selectMovie(category, movie))}>Select</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </aside>
        </>
    );
}

export default Sidebar;