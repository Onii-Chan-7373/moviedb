export const load = async({fetch, params}) => {
    const movieId = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f23ca6044e548eb28635912d674c26f9`);
    const data = await res.json();
    if(res.ok){
        return {
            details: data
        };
    }
}