export const load = async({fetch}) => {
    let res;
    try{
        res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f23ca6044e548eb28635912d674c26f9`);
    } catch(e) {
        return null;
    }
    const data = await res.json();
    if(res.ok){
        return {
            movies: data.results
        };
    }
}