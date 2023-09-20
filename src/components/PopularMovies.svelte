<script>
    import MovieCard from "./MovieCard.svelte";
    export let movies;
</script>

<h3>Popular Movies</h3>
{#await movies}
    <h1>Loading Popular Movies...</h1>
{:then movies}
    {#if movies}
        <div class="popular-movies">
            {#each movies as movie}
                <MovieCard {movie}/>
            {/each}
        </div>
    {:else}
        <h1>Sometging went wrong while loading...</h1>
    {/if}
{:catch error}
    <h1>Something went wrong while loading...</h1>
{/await}

<style>
    h3{
        padding: 0 1rem;
    }

    .popular-movies{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
    }

    @media (max-width: 500px){
        .popular-movies {
            grid-template-columns: auto auto;
        }
    }
</style>