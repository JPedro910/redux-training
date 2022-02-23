import React from "react";
import { connect } from "react-redux";

import { Creators as MoviesActions } from "../../store/ducks/movie";
import { bindActionCreators } from "redux";

const Sidebar = ({ categories, selectMovie }) => {

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

const mapDispatchToProps = (dispatch) => bindActionCreators(MoviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);