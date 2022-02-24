import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { MovieActions } from "../../store/ducks/movie";
import { bindActionCreators } from "redux";

import { getMovies } from "../../store/fetchActions/movie";

const Sidebar = ({ categories, selectMovie }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return ( 
        <>
            <aside>
                {
                    categories.map((category) => (
                        <div key={category.id}>
                            <h3>{category.name}</h3>
                            <ul>
                                {category.movies.map((movie) => (
                                    <li key={movie.id}>
                                        {movie.title} was released in {movie.released}
                                        <button onClick={() => selectMovie(category, movie)}>Select</button>
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

const mapStateToProps = (store) => ({
    categories: store.movie.categories
});

const mapDispatchToProps = (dispatch) => bindActionCreators(MovieActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);