const SelectMovieAction = (category, movie) => {
    return {
        type: "SELECT_MOVIE",
        category: category,
        movie: movie
    }
}

export default SelectMovieAction;