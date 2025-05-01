<script>
    import AOS from "aos";
    import "aos/dist/aos.css";
    import { createIcons, icons } from 'lucide';

    $effect(() => {
        AOS.init({
            duration: 1000,
            mirror: true
        });
        createIcons({ icons });
        window.history.scrollRestoration = "manual";
        window.location.hash = "";
    });
</script>