<script>
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	let input = '';
	let active = false;

	function cancelInactive() {
		if (input) {
			active = true;
		} else {
			active = false;
		}
	}

	function submitSearch() {
		goto('/search/' + input);
	}
</script>

<form on:submit|preventDefault={submitSearch} class="search">
	{#if !active}
		<label in:fly={{ y: -10, duration: 500 }} out:fly={{ y: -10, duration: 500 }} for="searchbar"
			>Search Movie</label
		>
	{/if}
	<input
		bind:value={input}
		on:focus={() => (active = true)}
		on:blur={cancelInactive}
		name="searchbar"
		type="text"
		class={active ? 'selected' : ''}
	/>
	{#if input}
		<button in:fly={{ x: 10, duration: 500 }} out:fly={{ x: 10, duration: 500 }}>Search</button>
	{/if}
</form>

<style>
	.search {
		position: relative;
		width: 30%;
		margin: 1rem;
	}

	button {
		font-size: 0.7rem;
		padding: 0rem 1rem;
		background: rgb(96, 110, 201);
		color: white;
		font-weight: bold;
		border: none;
		position: absolute;
		bottom: 50%;
		right: 0;
		transform: translate(0, 50%);
		height: 100%;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		cursor: pointer;
	}

	input {
		width: 100%;
		border: none;
		font-size: 1rem;
		font-family: 'Poppins', sans-serif;
		outline: none;
		color: rgb(255, 255, 255);
		padding: 0.5rem 0.1rem;
		transition: background 0.75s ease-out;
		font-weight: bold;
		background: rgb(63, 63, 63);
		border-radius: 10px;
		padding: 1rem;
	}

	label {
		position: absolute;
		font-size: 0.8rem;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		pointer-events: none;
		color: #fff;
		padding: 0 1rem;
	}
	input.selected {
		background: rgb(40, 40, 40);
	}

	@media (max-width: 500px) {
		.search {
			width: 100%;
			align-self: center;
			justify-self: center;
			width: 100%;
		}
		input {
			padding: 0.3em 1em;
		}
	}
</style>
