<script>
	import MovieCard from '../../../components/MovieCard.svelte';
	import { fly } from 'svelte/transition';
	import SearchMovies from '../../../components/SearchMovies.svelte';
	import { page } from '$app/stores';

	export let data;
	let results = data.results;
	$: searched = $page.params.id;

	$: data,
		(() => {
			results = data.results;
			results = results;
		})();
</script>

<SearchMovies />
<div class="container">
	<div in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 300 }}>
		<h1>Results for {searched}</h1>
		<div class="searched-movies">
			{#key results}
				{#each results as movie}
					<MovieCard {movie} />
				{/each}
			{/key}
		</div>
	</div>
</div>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
	}
	@media (max-width: 500px) {
		.searched-movies {
			display: inline-grid;
			grid-template-columns: repeat(3, 26.66vw);
			align-items: center;
			justify-content: center;
			justify-items: center;
		}
		.container {
			width: 100vw;
		}
		h1 {
			padding: 0;
			width: 80vw;
		}
	}
</style>
