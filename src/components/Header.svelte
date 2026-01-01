<header class="flex fixed w-full top-0 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur ">
    <div class="flex justify-between items-center py-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-50">
        <a href="#about" onclick={(e) => handleClick(e, 'about')} class="text-2xl font-bold relative" data-aos="fade-right" data-aos-delay="200" aria-label="logo">
            <span class="logo w-8 h-8 top-1 md:w-10 md:h-10 inline-block bg-white hover:bg-(--ui-primary) relative z-20"></span>
            <div class="absolute rounded-full -top-30 left-1/2 transform -translate-x-1/2 size-[300px] z-10 bg-(--ui-primary) opacity-90 blur-[200px]"></div>
        </a>

        <!-- Hamburger Menu Button -->
        <button
            bind:this={hamburgerRef}
            class="md:hidden text-2xl focus:outline-none z-60 flex justify-center items-center"
            aria-label="Toggle navigation"
            onclick={() => (isMobileNavOpen = !isMobileNavOpen)}
            data-aos="fade-left" data-aos-delay="200"
        >
            {#if isMobileNavOpen}
                <XIcon size="30" />
            {:else}
                <AlignRightIcon size="30" />
            {/if}
        </button>

        <!-- Desktop Navigation -->
        <nav id="desktop-nav" class="hidden md:flex" data-aos="fade-left" data-aos-delay="200">
            {#each anchors as anchor}
                <a 
                    href={`#${anchor}`}
                    data-name={anchor}
                    class={anchorClasses(anchor)}
                    onclick={(e) => handleClick(e, anchor)}
                >
                    {anchor}
                </a>
            {/each}
        </nav>

        <!-- Mobile Navigation -->
        {#if isMobileNavOpen}
            <nav
                bind:this={mobileNavRef}
                id="mobile-nav"
                class="fixed top-0 right-0 h-screen w-[280px] bg-gradient-to-br from-gray-900 to-black flex flex-col pt-20 px-6 z-50 md:hidden border-l border-white/10 mobile-nav-menu"
                transition:fly={{ x: 280, duration: 300, opacity: 1 }}
            >
                {#each anchors as anchor, i}
                    <a
                        href={`#${anchor}`}
                        data-name={anchor}
                        class={anchorClasses(anchor, true)}
                        onclick={(e) => handleClick(e, anchor)}
                        style="animation-delay: {100 + i * 50}ms"
                    >
                        {anchor}
                    </a>
                {/each}
            </nav>
        {/if}
    </div>
</header>

<script lang="ts">
    import { XIcon, AlignRightIcon } from '@lucide/svelte';
    import { fade, fly } from 'svelte/transition';
    import { useClickOutside } from '../lib/useClickOutside';

    type ClassConfig = {
        desktop: string;
        mobile: string;
    };

    let observer: IntersectionObserver;
    let isMobileNavOpen = $state<boolean>(false);
    let activeAnchor = $state<string>('about');
    let mobileNavRef = $state<HTMLElement>();
    let hamburgerRef = $state<HTMLButtonElement>();

    const anchors = ['about', 'services', 'projects', 'contact'];
    const defaultClasses: ClassConfig = {
        desktop: 'text-lg font-semibold mx-4 hover:text-(--ui-primary) transition-colors duration-300',
        mobile: 'text-xl font-semibold py-4 px-6 my-2 text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 capitalize border-l-2 border-transparent hover:border-(--ui-primary) mobile-nav-item',
        
    };
    const activeClasses: ClassConfig = {
        desktop: 'active bg-gradient-to-r from-(--ui-primary) to-indigo-600 bg-clip-text text-transparent',
        mobile: 'active !text-white !bg-gradient-to-r from-(--ui-primary)/20 to-indigo-600/20 !border-(--ui-primary)',   
    };

    const anchorClasses = (anchor: string, isMobile: boolean = false): string => {
        return activeAnchor === anchor ? `${getClass(defaultClasses, isMobile)} ${getClass(activeClasses, isMobile)}` : getClass(defaultClasses, isMobile);
    };

    const getClass = (classes: ClassConfig, isMobile: boolean): string => {
        return isMobile ? classes.mobile : classes.desktop;
    };

    $effect(() => {
        observer = new IntersectionObserver(handleIntersection, {
            root: null, // Viewport
            threshold: 0.6, // 60% of section must be visible
        });

        document.querySelectorAll("section").forEach((section) => {
            observer.observe(section);
        });

        return () => {
            if (observer) observer.disconnect();
        };
    });

    // Click outside handler for mobile nav
    $effect(() => {
        if (isMobileNavOpen) {
            return useClickOutside(() => {
                isMobileNavOpen = false;
            }, [mobileNavRef, hamburgerRef]);
        }
    });

    function handleClick(e: MouseEvent, name: string): void {
        if (typeof name !== 'undefined') {
            addActiveToNav(name);
            isMobileNavOpen = false;
        }
    }

    function addActiveToNav(name: string): void {
        activeAnchor = name;
    }

    function handleIntersection(entries: IntersectionObserverEntry[]): void {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                addActiveToNav(entry.target.id);
            }
        });
    }
</script>