<section id="about" class="min-h-screen w-full flex flex-col items-center justify-center py-20 px-5 relative">
    <h2 class="text-2xl md:text-3xl font-bold text-center" data-aos="fade-up" data-aos-delay="200">Hey there <span class="animate-wave">👋</span></h2>
    <h1 class="text-2xl md:text-5xl text-center font-bold" data-aos="fade-up" data-aos-delay="400">I'm <span class="text-4xl md:text-6xl text-(--ui-primary)">Brian Monsales</span></h1>
    <div class="text-header h-[40px] sm:h-[45px] md:h-[60px] overflow-hidden" data-aos="fade-up" data-aos-delay="500">
        <WordRotate 
            height="40"
            class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-shine" 
            words={["Full Stack Web Developer", "Frontend Web Developer", "Software Engineer"]}
        />
    </div>
    <p class="mt-3 flex flex-row justify-center items-center gap-1 font-bold" data-aos="fade-up" data-aos-delay="600">
        <MapPin size="18" /> Tagbilaran City, Bohol, Philippines
    </p>

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

    <div class="btn-con" data-aos="fade-up" data-aos-delay="700">
        <Button sType="success" withBeam onclick={downloadResume}>
            <Download size="18" class="mr-2" /> Download Resume
        </Button>
    </div>
    
    <div class="min-h-[300px] md:min-h-[400px] w-full"></div>
    <img src={workstation.src} alt="workstation" class="absolute h-[400px] w-[820px] bottom-0 left-1/2 z-9 object-cover transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="800"/>
    <img src={programmer.src} alt="programmer" class="absolute max-h-[360px] w-full bottom-0 left-0 object-contain z-10" data-aos="fade-up" data-aos-delay="1200"/>
</section>

<script>
    import { MapPin, Download } from '@lucide/svelte';
    import programmer from '@assets/programmer.webp';
    import workstation from '@assets/workstation.gif';
    import Button from '@components/ui/Button.svelte';
    import WordRotate from '@components/ui/WordRotate.svelte';

    const tech = [
        {name: 'Bash', svg_name: 'bash'}, {name: 'HTML', svg_name: 'html'}, {name: 'CSS', svg_name: 'css'},
        {name: 'Vue', svg_name: 'vue'}, {name: 'React', svg_name: 'react'}, {name: 'Svelte', svg_name: 'svelte'},
        {name: 'Javascript', svg_name: 'javascript'}, {name: 'Typescript', svg_name: 'typescript'}, {name: 'NodeJs', svg_name: 'nodejs'},
        {name: 'Laravel', svg_name: 'laravel'}, {name: 'PHP', svg_name: 'php'}, {name: 'MySQL', svg_name: 'mysql'}, {name: 'MongoDB', svg_name: 'mongodb'},
    ]

    function downloadResume () {
        console.log('downloading...')
    }
</script>