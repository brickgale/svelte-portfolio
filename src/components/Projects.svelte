<section id="projects" class="w-full min-h-screen flex flex-col relative justify-center items-center py-25 overflow-hidden">
    <div class="flex flex-col w-full h-full max-w-7xl min-h-[400px] mx-auto px-4 sm:px-6 lg:px-8 pb-0 md:pb-20 relative z-10">
        <div class="w-full title pb-10 md:pb-20">
            <h2 class="text-4xl text-center">Projects</h2>
        </div>
        <div class="flex flex-row flex-wrap -m-2">
            {#each projects as project}
                <div class="w-full sm:w-1/2 lg:w-1/3 p-2 flex justify-center">
                    <ProjectCard project={project} />
                </div>
            {/each}
        </div>
    </div>
</section>

<script>
    import ProjectCard from '@components/ui/ProjectCard.svelte';
    
    const projects = [
        {
            name: "Dating X",
            imgSrc: '/projects/dating3.png',
            company: "Optimail Co. Ltd. / Moebius Development Co. Ltd.",
            date: "2018-2024",
            description: "A multi domain dating app with theming built in to, it has messaging inside as well as push notifications for people to get notified whenever they got new messages or have been labeled as favorites for other users.",
            url: "https://preview.datingdev.app/",
            hasLiveDemo: true,
            role: "Made the new version of the app from laravel and angularjs v2 to laravel 5 and vuejs v2, added the theming feature with total of 3 completed themes integrated within the app. Also added the push notification feature for the app. Overall responsible for the front end development of the app.From adding new features to fixing bugs. Considered myself the main contributer and maintainer of the app.",
        },
        {
            name: "Skill Shift",
            imgSrc: '/projects/skillshift.png',
            company: "Freemight / Monstarlab Cebu",
            date: "2018",
            description: "A japanese job posting board that allows part time worksers to find jobs throughout Japan. You can filter out which prefecture / region you want to apply and what type of job you want.",
            url: "https://www.skill-shift.com/",
            hasLiveDemo: true,
            role: "Started the project from scratch, created the whole front end of the app using laravel 5 and vuejs v2. Integrated the backend api with the frontend. Added features like filtering jobs by region and type of job. I had one collegue who eventually helped me to finish the project.",
            
        },
        {
            name: "Mee2box",
            imgSrc: '/projects/mee2box1.png',
            company: "Freemight / Monstarlab Cebu",
            date: "2017",
            description: "A japanese zoom-like video conferencing web app that allows you to create a room and invite clients to join, it allows file sharing inside the meeting as well so that you could brainstorm efficiently.",
            url: "https://svenpham.webflow.io/project/mee2box",
            hasLiveDemo: false,
            role: "Started the project from scratch, made it using laravel 5 and vuejs v1 with Keen-UI (similar to Vuetify which is based in Material Design). Responsible in integrating authentication, video conferencing (used peerjs then eventually switched to SkywayJs), file uploads, and the user management. Eventually passed to a different development company after I made the initial version of the app. I was the only one who worked on the project."
        }
    ];
</script>
