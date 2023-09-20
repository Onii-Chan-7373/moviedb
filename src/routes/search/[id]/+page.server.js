export const load = async ({ fetch, params }) => {
	const searchKey = params.id;
	const api_key = import.meta.env.VITE_API_KEY;
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchKey}&include_adult=false`
	);
	const data = await res.json();
	if (res.ok) {
		return data;
	}
};
