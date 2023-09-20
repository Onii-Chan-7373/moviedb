<script>
	import PopularMovies from '../components/PopularMovies.svelte';
	import SearchMovies from '../components/SearchMovies.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<section in:fly={{ y: 50, duration: 500, delay: 300 }} out:fly={{ duration: 300 }}>
	<SearchMovies />
	<PopularMovies movies={data.movies} />
</section>
