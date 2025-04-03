<section id="home" class="min-h-screen w-full flex flex-col items-center justify-center py-20 px-5 relative">
    <h2 class="text-2xl md:text-3xl font-bold text-center" data-aos="fade-up" data-aos-delay="200">Hey there 👋</h2>
    <h1 class="text-5xl md:text-6xl font-bold text-center" data-aos="fade-up" data-aos-delay="400">I'm <span >Brian Monsales</span></h1>
    <h2 class="text-3xl md:text-4xl font-bold text-center mt-3 bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent text-shine"
    data-aos="fade-up" data-aos-delay="500">
        Full Stack Web Developer
    </h2>
    <h5 class="mt-2 flex flex-row justify-center items-center gap-1" data-aos="fade-up" data-aos-delay="600">
        <i class="inline" width="18" height="18" data-lucide="map-pin"></i>Bohol, Philippines
    </h5>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="relative overflow-x-hidden py-8 infinite-scroll-container" data-aos="fade-up" data-aos-delay="700">
            <div class="flex animate-scroll gap-12 md:gap-20 w-max p-6">
            {#each tech as t}
                <div class="flex items-center gap-2 group transition-all duration-300">
                    <img src={`/svg_icons/${t.svg_name}.svg`} alt={t.name} class="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60" />
                    {t.name}
                </div>
            {/each}
            </div>
        </div>
    </div>

    <div class="min-h-[400px] w-full"></div>
    
    <img src={programmer.src} alt="programmer" class="absolute max-h-[400px] w-full bottom-0 left-0 object-contain" data-aos="fade-up" data-aos-delay="800"/>
</section>

<script>
    import programmer from '@assets/programmer.png';

    const tech = [
        {name: 'Bash', svg_name: 'bash'}, {name: 'HTML', svg_name: 'html'}, {name: 'CSS', svg_name: 'css'},
        {name: 'Vue', svg_name: 'vue'}, {name: 'React', svg_name: 'react'}, {name: 'Svelte', svg_name: 'svelte'},
        {name: 'Javascript', svg_name: 'javascript'}, {name: 'Typescript', svg_name: 'typescript'}, {name: 'NodeJs', svg_name: 'nodejs'},
        {name: 'PHP', svg_name: 'php'}, {name: 'MySQL', svg_name: 'mysql'}, {name: 'MongoDB', svg_name: 'mongodb'},
    ]
</script>

<style>
    
</style>