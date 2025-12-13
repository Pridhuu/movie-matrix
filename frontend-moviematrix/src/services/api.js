const API_KEY = "6fc7291dd8554ec0f41bc8c642edbef0"
const BASE_URL = "https://api.themoviedb.org/3"

export const getTrendingMovies = async () => {
    let response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}
export const searchMovies = async (query) => {
    let response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}
