<script>
    import { goto } from '$app/navigation'
    export let movie;

    let imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

</script>

<div class="movie-card">
    <a data-sveltekit-preload-data data-sveltekit-noscroll href={'/movie/' + movie.id}>
        {#if movie.poster_path}
            <img src={imageUrl} alt={movie.title}>
        {:else}
            <p class="noImage">No Image</p>
        {/if}
    </a>
    <div class="description" on:click={goto('/movie/' + movie.id)} on:keyup={null}>
        <h2>{movie.title}</h2>
    </div>
</div>

<style>
    img, .noImage{
        width: auto;
        height: 30vh;
        object-fit: contain;
        border-radius: 1rem;
        margin-bottom: 1rem;
        transition: all ease-in-out .3s;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
    }
    h2{
        font-size: 1.2rem;
    }
    .description{
        height: 5vh;
        cursor: pointer;
        transition: all ease-in-out .3s;
    }
    p{
        font-size: 0.8rem;
    }
    .movie-card{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
    }

    .movie-card:hover a :is(img, .noImage) {
        transform: translate(-2%, -2%);
        box-shadow: rgba(0, 0, 0, 0.3) 10px 10px 5px;
    }

    .movie-card:hover > .description {
        text-shadow: rgba(0, 0, 0, 0.3) 2px 2px 2px;
    }

    .noImage {
        width: 160px;
        height: 250px;
        background-color: grey;
        color: white;
        text-align: center;
        align-self: center;
    }

    @media (max-width: 500px) {
        img, .noImage {
            height: auto;
            width: 30vw;
        }
    }

</style>