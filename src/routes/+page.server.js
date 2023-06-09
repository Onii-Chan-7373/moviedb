export const load = async({fetch}) => {
    let res;
    try{
        res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`);
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