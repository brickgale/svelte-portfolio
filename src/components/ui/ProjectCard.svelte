<script>
    import { cn, stringTruncate } from "@lib/utils";
    let props = $props();
    const project = props.project;

    let imageElement;
    let isScrollable = $state(false);
    let scrollDuration = $state(3000); // default duration in ms
    
    function checkScrollable() {
        if (!imageElement) return;
        
        const containerHeight = imageElement.parentElement.offsetHeight;
        const imageHeight = imageElement.naturalHeight;
        const imageWidth = imageElement.naturalWidth;
        
        // Calculate the rendered height when width is constrained
        const aspectRatio = imageHeight / imageWidth;
        const renderedHeight = imageElement.offsetWidth * aspectRatio;
        
        // Check if rendered image is at least 150% of container height
        isScrollable = renderedHeight >= containerHeight * 1.5;
        
        if (isScrollable) {
            // Calculate scrollable distance
            const scrollableDistance = renderedHeight - containerHeight;
            // Set duration based on scrollable distance (e.g., 8ms per pixel of scroll)
            console.log(`Scrollable Distance: ${Math.max(2000, scrollableDistance * 20)}`);
            scrollDuration = Math.max(2000, scrollableDistance * 8); // minimum 2s, 8ms per pixel
        }
    }
</script>

<div 
    aria-label="Project Card"
    role="region"
    class={cn('rounded-lg relative aspect-[4/3] overflow-hidden group cursor-pointer', props.class)}
>
    <img
        bind:this={imageElement}
        src="{project.imgSrc}"
        placeholder="blur"
        alt="{project.name}"
        class="w-full h-full object-cover object-top m-0 transition-all ease-linear {isScrollable ? 'group-hover:object-bottom' : ''}"
        style="transition-duration: {scrollDuration}ms;"
        onload={checkScrollable}
    />
    <!--  overlay  -->
    <div
        class="absolute inset-0 from-black/95 via-black/70 to-black/20 bg-gradient-to-t transition-opacity duration-300 opacity-60 group-hover:opacity-80"
    ></div>
    <div class="text-gray-100 sm:px-4 py-0 sm:pb-3 text-left absolute pb-2 px-4 md:pb-5 inset-x-0 bottom-0 flex flex-col justify-end size-full transform transition-transform duration-500 ease-out translate-y-4 group-hover:translate-y-0">
        <h3 class="text-lg font-bold tracking-wide mt-3 mb-1 transform transition-all duration-500 delay-75 translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100">{project.name}</h3>
        <p class="min-h-[62px] text-sm leading-5 transform transition-all duration-500 delay-150 translate-y-6 opacity-70 group-hover:translate-y-0 group-hover:opacity-100">{stringTruncate(project.description, 150)}</p>
    </div>
</div>