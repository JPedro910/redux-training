import React from 'react';

import { connect } from "react-redux";

const Player = ({ selectedCategory, selectedMovie }) => {
    return ( 
        <>
            <div>
                <h1>Video Player</h1>
                <h2>{ `${ selectedCategory }, ${ selectedMovie }` } </h2>
            </div>
        </>
     );
}

const mapStateToProps = (store) => ({
    selectedCategory: store.movie.selectedCategory,
    selectedMovie: store.movie.selectedMovie,
});

export default connect(mapStateToProps)(Player);