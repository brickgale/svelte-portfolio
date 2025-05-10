<script>
    import AOS from "aos";
    import "aos/dist/aos.css";

    $effect(() => {
        AOS.init({
            duration: 1000,
            mirror: true
        });
        window.history.scrollRestoration = "manual";
        window.location.hash = "";
    });
</script>