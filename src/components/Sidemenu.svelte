<script>
    import { fly } from "svelte/transition";
    export let open;
</script>

{#if open}
    <div class="menu-body" in:fly={{y: -10}} out:fly={{y: -10, delay: 160}}>
        {#each ["Home", "Search", "About"] as item, i}
             <a 
             href="/"
             in:fly={{y: -5, delay: 80 * (i + 1)}} 
             out:fly={{y: -5, delay: 80 / (i + 1)}}
             >{item}</a> 
             <br>
        {/each}
    </div>
{/if}

<style>
    .menu-body {
        position: absolute;
        top: 8vh;
        left: 2vw;
        padding-top: 10px;
        padding-bottom: 10px;
        border: solid 3px grey;
    }
    a {
        margin: 20px;
        margin-bottom: 40px;
        transition: all 0.5s;
    }

</style>