export const load = async ({ fetch, params }) => {
	const movieId = params.id;
	const api_key = import.meta.env.VITE_API_KEY;
	const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`);
	const data = await res.json();
	if (res.ok) {
		return {
			details: data
		};
	}
};
