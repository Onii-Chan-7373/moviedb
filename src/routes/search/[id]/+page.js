export const load = async({fetch, params}) => {
    const searchKey = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f23ca6044e548eb28635912d674c26f9&query=${searchKey}&include_adult=true`);
    const data = await res.json();
    if(res.ok){
        return data;
    }
}