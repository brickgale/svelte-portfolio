<section id="home" class="min-h-screen w-full flex flex-col items-center justify-center py-20 px-5">
    <h2 class="text-2xl md:text-3xl font-bold text-center">Hey there 👋</h2>
    <h1 class="text-5xl md:text-6xl font-bold text-center">I'm <span >Brian Monsales</span></h1>
    <h2 class="text-3xl md:text-4xl font-bold text-center mt-3 bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent text-shine">
        Full Stack Web Developer
    </h2>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="relative overflow-x-hidden py-8 infinite-scroll-container">
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
    <div class="flex flex-row flex-wrap w-full h-full max-w-7xl min-h-[400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="w-w-full sm:w-2/3 p-2">
            
        
        </div>
        <div class="w-w-full sm:w-1/3 p-2">
        
        </div>
    </div>
</section>

<script>
    const tech = [
        {name: 'Bash', svg_name: 'bash'}, {name: 'HTML', svg_name: 'html'}, {name: 'CSS', svg_name: 'css'},
        {name: 'Vue', svg_name: 'vue'}, {name: 'React', svg_name: 'react'}, {name: 'Svelte', svg_name: 'svelte'},
        {name: 'Javascript', svg_name: 'javascript'}, {name: 'Typescript', svg_name: 'typescript'}, {name: 'NodeJs', svg_name: 'nodejs'},
        {name: 'PHP', svg_name: 'php'}, {name: 'MySQL', svg_name: 'mysql'}, {name: 'MongoDB', svg_name: 'mongodb'},
    ]
</script>

<style>
    
</style>