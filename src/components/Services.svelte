<section id="services" class="min-h-screen w-full flex flex-col relative justify-center items-center relative py-20">
    <div data-orientation="horizontal" role="separator" class="w-full absolute left-0 top-0">
        <div class="w-full border-solid border-t border-(--ui-primary)/30"></div>
    </div>
    <div class="flex flex-row flex-wrap w-full h-full max-w-7xl min-h-[400px] mx-auto px-4 sm:px-6 lg:px-8 pb-0 md:pb-20">
        <div class="w-full title pb-10 md:pb-20">
            <h2 class="text-3xl pb-2" data-aos="fade-up" data-aos-delay="100">Primary Focuses</h2>
            <p class="text-xl" data-aos="fade-up" data-aos-delay="150">Core services offering</p>
        </div>
        <div class="flex flex-row flex-wrap -m-2">
            {#each services as service, key}
                <div class="w-full sm:w-1/2 md:w-1/3 p-2 flex justify-center">
                    <Card class="bg-gray-700" data-aos="fade-up" data-aos-delay={200*key}> 
                        {#snippet title()}
                            {service.title}
                        {/snippet}
                        {#snippet content()}
                            {service.content}
                        {/snippet}
                        {#snippet footer()}
                            Tech used: <br /> <span class="text-sm">{service.tech}</span>
                        {/snippet}
                    </Card>
                </div>
            {/each}
        </div>
    </div>
    <div data-orientation="horizontal" role="separator" class="w-full absolute left-0 bottom-0">
        <div class="w-full border-solid border-t border-(--ui-primary)/50"></div>
    </div>
</section>

<script>
    import Card from '@components/ui/Card.svelte';

    const services = [
        {
            title: 'UI/UX Design',
            content: 'Designing intuitive and engaging user interfaces that focuses in user experience that leads to conversions.',
            tech: 'Figma, Zeplin, Photoshop',
        },
        {
            title: 'Frontend Development',
            content: 'Construct responsive and user-friendly websites using modern frontend libraries whether it is React, Vue, and Svelte.',
            tech: 'Vanilla JS, JQuery, React, Vue, Svelte, TailwindCSS, Bootstrap',
        },
        {
            title: 'API Development',
            content: 'Building robust REST APIs, integrate different business logic, use industry standard authentication, and even integrate payment gateways.',
            tech: 'PHP, Laravel, NodeJs, Express, Prisma, MySQL, MongoDB, SQLite',
        },
    ];
</script>

<style>
    section {
        background: linear-gradient(to bottom, rgb(11 11 11), rgb(22 22 22)) no-repeat center center / cover;
    }
</style>
