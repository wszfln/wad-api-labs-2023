export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=62e9b1532f93f28c70bdb47f5ad15a3f&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };