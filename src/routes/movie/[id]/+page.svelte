<script>
    import { goto, afterNavigate } from '$app/navigation';
    import { base } from '$app/paths';
    import { fly } from 'svelte/transition';
    
    export let data;
    
    const details = data.details;

    let previousPage = base;

    afterNavigate(({from}) => {
    previousPage = from?.url.pathname || previousPage;
    }) 

</script>

<div class="movie-details" in:fly={{y: 50, duration: 500, delay: 500}} out:fly={{duration: 300}}>
    <div class="arrow-container">
        <i on:click={goto(previousPage)} on:keyup={null} class="bi-arrow-left" style="margin-bottom: 10px; cursor: pointer;"></i>
    </div>
    <div class="img-container">
        <img src={'https://image.tmdb.org/t/p/original' + details.backdrop_path} alt={details.title}>
    </div>
    <div class="text-container">
        <h1>{details.title}</h1>
        <p class="overview">{details.overview}</p>
        <p>
            <span>Release Date</span>
            {details.release_date} <br>
            <span>Budget: </span>
            {details.budget != 0? new Intl.NumberFormat('us-US', {style: 'currency', currency:'USD', maximumSignificantDigits: 3}).format(details.budget) : "no data"} <br>
            <span>Rating: </span>
            {details.vote_average}/10 <br>
            <span>Runtime: </span>
            {details.runtime}mins
        </p>
    </div>
</div>

<style>
    h1 {
        padding: 1rem 0rem 2rem;
    }
    p {
        padding: 1rem 0rem;
    }
    .img-container {
        width: 100%;
    }
    img {
        width: 100%;
        border-radius: 1rem;
    }
    .movie-details {
        margin: 2rem 20%;
    }
    span {
        font-weight: bold;
    }
</style>