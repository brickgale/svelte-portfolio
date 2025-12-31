<script>
    import AOS from "aos";
    import "aos/dist/aos.css";
    import { getPerformanceLevel } from "@lib/performance";

    $effect(() => {
        // Detect performance level
        const level = getPerformanceLevel();
        
        // Only initialize AOS on medium/high performance
        if (level !== 'low') {
            AOS.init({
                duration: level === 'high' ? 1000 : 600,
                mirror: level === 'high',
                once: level === 'medium' // Animate only once on medium performance
            });
        }
        
        window.history.scrollRestoration = "manual";
        window.location.hash = "";
    });
</script>