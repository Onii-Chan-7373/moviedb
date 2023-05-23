<nav>
    <a href="/">Movie Database</a>
</nav>

<style>
    nav {
        display: flex;
        min-height: 10vh;
        align-items: center;
        justify-content: center;
    }
    a {
        font-size: 2rem;
        font-weight: bold;
        font-family: 'Poppins';
        color: black;
        text-decoration: none;
        background-image: linear-gradient(#313131, #313131);
        background-size: 0% 0.1em;
        background-position-y: 100%;
        background-position-x: 50%;
        background-repeat: no-repeat;
        transition: background-size 0.2s ease-in-out;
    }
    a:hover,
    a:focus,
    a:active {
        background-size: 100% 0.2em;
    }
</style>