import React from 'react';

import { useSelector } from "react-redux";
import { RootState } from '../../store';

const Player = () => {

    const selectedCategory = useSelector((state: RootState) => state.movie.selectedCategory);
    const selectedMovie = useSelector((state: RootState) => state.movie.selectedMovie);

    return ( 
        <>
            <div>
                <h1>Video Player</h1>
                <h2>{ `${ selectedCategory }, ${ selectedMovie }` } </h2>
            </div>
        </>
     );
}

export default Player;