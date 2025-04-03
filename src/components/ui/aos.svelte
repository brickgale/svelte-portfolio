<script>
    import { onMount } from "svelte";
    import AOS from "aos";
    import "aos/dist/aos.css";
    import { createIcons, icons } from 'lucide';

    onMount(() => {
        AOS.init({
            duration: 1000,
        });
        createIcons({ icons });
        window.history.scrollRestoration = "manual";
    });
</script>