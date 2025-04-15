<header class="flex justify-between items-center py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fixed w-full top-0 left-1/2 transform -translate-x-1/2 z-50 md:backdrop-blur">
    <a href="#about" on:click={(e)=> handleClick(e, 'about')} class="text-2xl font-bold relative" data-aos="fade-right" data-aos-delay="200" aria-label="logo">
        <span class="logo w-10 h-10 inline-block bg-white hover:bg-(--ui-primary)"></span>
        <div class="absolute rounded-full -top-30 left-1/2 transform -translate-x-1/2 size-[300px] z-10 bg-(--ui-primary) opacity-90 blur-[200px]"></div>
    </a>
    <nav id="header-links" class="hidden md:flex" data-aos="fade-left" data-aos-delay="200">
        {#each anchors as anchor}
            <a href={`#${anchor}`} data-name={anchor} class="text-lg font-semibold mx-4 hover:text-(--ui-primary) transition-colors duration-300" on:click={(e)=> handleClick(e, 'anchor')}>{anchor}</a>
        {/each}
    </nav>

</header>

<script>
    import logo from '@assets/logo-white.svg';
    import { onMount, onDestroy } from 'svelte';
    const anchors = ['about', 'services', 'projects', 'contact'];
    const activeClasses = ['active', 'bg-gradient-to-r', 'from-(--ui-primary)', 'to-indigo-600', 'bg-clip-text', 'text-transparent'];

    onMount(() => {
        const links = document.querySelectorAll('nav#header-links a');
        activeClasses.forEach((className) => {
            links[0].classList.add(className);
        });
    });

    function handleClick(e, name) {
        if(typeof name !== 'undefined') {
            addActiveToNav(name);
        }
    }

    function addActiveToNav(name) {
        const links = document.querySelectorAll('nav#header-links a');
        links.forEach((link) => {
            activeClasses.forEach((className) => {
                link.classList.remove(className);
            });
        });

        const target = document.querySelector(`#header-links [data-name="${name}"]`);
        if(target) {
            activeClasses.forEach((className) => {
                target.classList.add(className);
            });
        }
    }

    function handleIntersection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                addActiveToNav(entry.target.id);
            }
        });
    }

    let observer;
    onMount(() => {
        observer = new IntersectionObserver(handleIntersection, {
            root: null, // Viewport
            threshold: 0.6, // 60% of section must be visible
        });

        document.querySelectorAll("section").forEach((section) => {
            observer.observe(section);
        });
    });

    onDestroy(() => {
        if(observer) observer.disconnect();
    });
</script>