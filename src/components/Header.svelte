<header class="flex justify-between items-center py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fixed w-full top-0 left-1/2 transform -translate-x-1/2 ">
    <a href="/" class="text-2xl font-bold">Brian's Portfolio</a>
    <nav id="header-links">
        {#each anchors as anchor}
            <a href={`#${anchor}`} class="text-lg font-semibold mx-4" on:click={handleClick}>{anchor}</a>
        {/each}
    </nav>
</header>

<script>
    const anchors = ['home', 'about', 'projects', 'contact'];

    function handleClick(e) {
        const links = document.querySelectorAll('nav#header-links a');
        links.forEach((link) => {
            console.log(link.classList, 'link');
            link.classList.remove('text-blue-500');
        });
        e.target.classList.add('active', 'text-blue-500');
    }
</script>