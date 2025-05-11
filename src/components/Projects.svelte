<section id="projects" class="w-full min-h-screen flex flex-col relative justify-center items-center py-25 overflow-hidden">
    <div class="flex flex-col w-full h-full max-w-7xl min-h-[400px] mx-auto px-4 sm:px-6 lg:px-8 pb-0 md:pb-20 relative z-10">
        <div class="w-full title pb-10 md:pb-20">
            <h2 class="text-3xl md:text-4xl text-center" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">Projects</h2>
        </div>
        <div class="flex flex-row flex-wrap -m-2 overflow-hidden {hideAll ? 'mask-linear-to-bottom h-[500px] md:h-[450px]' : 'h-auto'}">
            {#each projects as project, key}
                <div class="w-full sm:w-1/2 lg:w-1/3 p-2 flex justify-center" data-aos="fade-up" data-aos-delay={300+(50 * key)} data-aos-once="true">
                    <ProjectCard project={project} />
                </div>
            {/each}
        </div>
        {#if hideAll}
            <div class="btn-con flex justify-center relateive z-10" data-aos="fade-up" data-aos-delay="600">
                <Button btnclass="z-20 -top-20" withBeam class="px-8" onclick={seeMore}> See More </Button>
            </div>
        {/if}
    </div>
</section>

<script>
    import ProjectCard from '@components/ui/ProjectCard.svelte';
    import Button from '@components/ui/Button.svelte';

    let hideAll = $state(true);

    function seeMore() {
        hideAll = false;
    }
     
    const projects = [
        {
            name: "Dating X",
            imgSrc: '/projects/dating3.png',
            company: "Optimail Co. Ltd. / Moebius Development Co. Ltd.",
            date: "2018-2024",
            description: "A multi domain dating app with theming, templating, localization, messaging, push notifications, and multiple payment gateway integrations.",
            url: "https://preview.datingdev.app/",
            hasLiveDemo: true,
            role: "Made the new version of the app from Laravel and Angularjs v2 to laravel 5 and vuejs v2, added the theming feature with total of 3 completed themes integrated within the app. Also added the push notification feature for the app. Overall responsible for the front end development of the app.From adding new features to fixing bugs. Considered myself the main contributer and maintainer of the app.",
        },
        {
            name: "Skill Shift",
            imgSrc: '/projects/skillshift.png',
            company: "Freemight / Monstarlab Cebu",
            date: "2017-2018",
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
        },
        {
            name: "Amsale",
            imgSrc: '/projects/amsale.png',
            company: "Sliding Monkey Web Development",
            date: "2016",
            description: "Ecommerce website that was built with Magento mixed with Wordpress. Selling wedding dresses and other wedding related products. Contains color swatches and product customizations.",
            url: null,
            hasLiveDemo: false,
            role: "My first Magento project, it was already live when I was assigned to it. I was tasked to do some bug fixes and add new features. It was quite a bit more complicated that your normal ecommerce website unlike using Shopify. It wasn't using any version control, just uploading fies thru FTP."
        },
        {
            name: "Kidsshoes",
            imgSrc: '/projects/kiddshoes.png',
            company: "Sliding Monkey Web Development",
            date: "2016",
            description: "Shopify website for, you guessed it, kids' shoes. It contains a lot of products and categories. Updating promos and sales depending on the season.",
            url: null,
            hasLiveDemo: false,
            role: "My first Shopify project, it was already live when I was assigned to it. I was tasked to do some bug fixes and add new features. I learned a lot about Shopify and how it works. I also learned how to use Liquid, the templating language used in Shopify."
        },
        {
            name: "iAssess",
            imgSrc: '/projects/iassess.png',
            company: "Nerubia Web Solutions",
            date: "2015-2016",
            description: "An Assessment Platform for candidates to certain companies in Singapore. There were complex algorithms with different exam types that would generate candidates scores / results unto pdfs. It was a quite data heavy app, couple thousands of records for each exam. It was built with Laravel 4 and AngularJS v2.",
            url: "https://measure.iassessonline.com/",
            hasLiveDemo: true,
            role: "When I was assigned to this project, it was already in production. Eventually, I was assigned to be the main maintainer for the app for atleast a solid year. This one of the projects that was very fulfilling for me, since the company allowed me to grow and learn a lot of things. I learned a lot from this project alongside with the Senior Developers in the company. My first project that was really strict on the Agile concept with actual sprints."
        },
        {
            name: "Groupjump",
            imgSrc: '/projects/groupjump.png',
            company: "NextIX Inc.",
            date: "2014-2015",
            description: "Social Media Web App that introduces \"jumpsites\", which is a facebook group-like feature where you can join and interact and socialize with like-minded people. This was running Laravel 4 and jQuery.",
            url: null,
            hasLiveDemo: false,
            role: "First project that I was introduce of a \"collaborative work\" and used Gitlab then switched to Github, I was assigned to front-end web for Groupjump, I eventually made Assistant Team Lead for couple months and atleast a month of Team Lead for the web team. Last sprint was to introduce e-commerce but eventually fell off since there weren't really any traffic."
        },
        {
            name: "Helpyoumarry",
            imgSrc: '/projects/helpyoumarry.png',
            company: "QLICK & PAIR",
            date: "2013",
            description: "Wordpress website for a Wedding Planner. Built with Wordpress and a custom theme using Bootstrap CSS and jQuery.",
            url: null,
            hasLiveDemo: false,
            role: "Project I started from scratch using Bootstrap CSS and jQuery inside Wordpress."
        },
        {
            name: "QuickQuotz",
            imgSrc: '/projects/quickquotz.png',
            company: "QLICK & PAIR",
            date: "2013",
            description: "Wordpress website that showcases images with quotes with different categories (ex: inspirational, relationships, and etc).",
            url: null,
            hasLiveDemo: false,
            role: "First project made from scratch using Bootstrap CSS and jQuery inside Wordpress."
        },
        {
            name: "Mocha Chai Laboratories",
            imgSrc: '/projects/mochachai.png',
            company: "iCreative Solution",
            date: "2013",
            description: "Wordpress website for a Boutique Hotel located in Malaysia. Built with Wordpress and a custom theme using Bootstrap CSS and jQuery.",
            url: "http://mochachailab.com/dev1/",
            hasLiveDemo: true,
            role: "Tasked to do bug fixes in UI and wordpress plugins. Also, made the logo using Photoshop."
        },
        {
            name: "IamJazz",
            imgSrc: '/projects/iamjazz.png',
            company: "iCreative Solution",
            date: "2013",
            description: "Wordpress website for a Boutique Hotel located in Malaysia. Built with Wordpress and a custom theme using custom CSs and jQuery.",
            url: null,
            hasLiveDemo: false,
            role: "Already an existing wordpress website that had bunch of bugs that needs to be fixed and new pages to add. This project was built IE in mind, there were a lot of \"hacks\" to make it work in IE. Design looked so dated compared to modern websites at that time."
        },
    ];
</script>
