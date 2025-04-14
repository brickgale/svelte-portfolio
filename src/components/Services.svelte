<section id="services" class="min-h-screen w-full flex flex-col relative justify-center items-center py-25 overflow-hidden">
    <div data-orientation="horizontal" role="separator" class="w-full absolute left-0 top-0 z-10">
        <div class="w-full border-solid border-t border-(--ui-primary)/30"></div>
    </div>
    <div class="flex flex-row flex-wrap w-full h-full max-w-7xl min-h-[400px] mx-auto px-4 sm:px-6 lg:px-8 pb-0 md:pb-20 relative z-10">
        <div class="w-full title pb-10 md:pb-20">
            <h2 class="text-2xl md:text-4xl pb-2" data-aos="fade-up" data-aos-delay="100">✨ Primary <span class="text-(--ui-primary)">Focuses</span></h2>
            <h4 class="text-xl md:text-2xl" data-aos="fade-up" data-aos-delay="150">Core services offering</h4>
        </div>
        <div class="flex flex-row flex-wrap -m-2">
            {#each services as service, key}
                <div class="w-full sm:w-1/2 lg:w-1/3 p-2 flex justify-center">
                    <Card class="min-h-[200px]" data-aos="fade-up" data-aos-delay={200*key}> 
                        {#snippet title()}
                            {service.title}
                        {/snippet}
                        {#snippet content()}
                            {service.content}
                        {/snippet}
                        {#snippet footer()}
                           <p class="text-sm font-medium mb-2">Tech used: </p>
                           <p class="text-xs">{service.tech}</p>
                        {/snippet}
                    </Card>
                </div>
            {/each}
        </div>
    </div>
    <div data-orientation="horizontal" role="separator" class="w-full absolute left-0 bottom-0 z-10">
        <div class="w-full border-solid border-t border-(--ui-primary)/50"></div>
    </div>
    <div class="w-full h-full absolute [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]">
        <BgDarkTiles r={30} c={30} class="w-full absolute top-0 left-0 z-0" />
    </div>
</section>

<script>
    import Card from '@components/ui/Card.svelte';
    import BgDarkTiles from '@components/ui/BgDarkTiles.svelte';

    const services = [
        {
            title: 'UI/UX Design',
            content: 'Designing intuitive and engaging user interfaces across different devices that focuses in user experience that leads to conversions and user retention. Making sure that the design is consistent and easy to use.',
            tech: 'Figma, Zeplin, Photoshop',
        },
        {
            title: 'Frontend Development',
            content: 'Construct responsive and user-friendly websites using modern frontend libraries whether it is React, Vue, and Svelte. Utilizing state management and built in functions that choosen library provides.',
            tech: 'Vanilla JS, JQuery, React, Vue, Svelte, TailwindCSS, Bootstrap',
        },
        {
            title: 'API Development',
            content: 'Building robust REST APIs, integrate different business logic, use industry standard authentication, and integrate payment gateways.',
            tech: 'Laravel, Express, Prisma, MySQL, MongoDB, SQLite',
        },
    ];
</script>

<style>
    section {
        background: linear-gradient(to bottom, rgb(11 11 11), rgb(22 22 22)) no-repeat center center / cover;
    }
</style>
