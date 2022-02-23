import React from 'react';

import { connect } from "react-redux";

const Player = ({ selectedCategory, selectedMovie }) => {
    return ( 
        <>
            <div>
                <h1>Video Player</h1>
                <h2>{ `${selectedCategory.name}, ${ selectedMovie.title }` } </h2>
            </div>
        </>
     );
}

const mapStateToProps = (store) => ({
    selectedCategory: store.MovieReducer.selectedCategory,
    selectedMovie: store.MovieReducer.selectedMovie,
});

export default connect(mapStateToProps)(Player);