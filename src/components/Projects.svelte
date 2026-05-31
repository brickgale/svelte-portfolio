<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { ExternalLink } from "@lucide/svelte";

  const projects = [
    {
      name: "Joysound",
      imgSrc: "/projects/joysound.jpg",
      company: "Monstarlab Cebu",
      date: "2024 - 2025",
      description:
        "A content heavy karaoke web app built with Nextjs, with weekly and monthly ranking for songs, and artists. It uses headless CMS called kuroco CMS.",
      url: "https://www.joysound.com/web/",
      hasLiveDemo: true,
      tech: ["Nextjs", "React", "Typescript", "TailwindCSS", "Storybook"],
    },
    {
      name: "Dating X",
      imgSrc: "/projects/dating3.jpg",
      company: "Optimail Co. Ltd. / Moebius Development Co. Ltd.",
      date: "2018 — 2024",
      description:
        "A multi-domain dating app with theming, templating, localization, messaging, push notifications, and multiple payment gateway integrations.",
      url: "https://preview.datingdev.app/",
      hasLiveDemo: true,
      tech: ["Vue.js", "Laravel", "PHP", "MySQL"],
    },
    {
      name: "Skill Shift",
      imgSrc: "/projects/skillshift.jpg",
      company: "Freemight / Monstarlab Cebu",
      date: "2017 — 2018",
      description:
        "A Japanese job posting board for part-time workers with regional filtering by prefecture and job type.",
      url: "https://www.skill-shift.com/",
      hasLiveDemo: true,
      tech: ["Vue.js", "Laravel", "PHP", "MySQL"],
    },
    {
      name: "Mee2box",
      imgSrc: "/projects/mee2box1.jpg",
      company: "Freemight / Monstarlab Cebu",
      date: "2017",
      description:
        "A Zoom-like video conferencing web app with in-meeting file sharing for efficient remote brainstorming.",
      url: "https://svenpham.webflow.io/project/mee2box",
      hasLiveDemo: false,
      tech: ["Vue.js", "Laravel", "WebRTC", "SkyWayJS"],
    },
    {
      name: "Amsale",
      imgSrc: "/projects/amsale.jpg",
      company: "Sliding Monkey Web Development",
      date: "2016",
      description:
        "E-commerce site built with Magento + WordPress selling wedding dresses, featuring color swatches and product customizations.",
      url: null,
      hasLiveDemo: false,
      tech: ["Magento", "WordPress", "PHP"],
    },
    {
      name: "Kidsshoes",
      imgSrc: "/projects/kiddshoes.jpg",
      company: "Sliding Monkey Web Development",
      date: "2016",
      description:
        "Shopify store for kids' shoes with seasonal promos, Liquid templating, and new feature additions.",
      url: null,
      hasLiveDemo: false,
      tech: ["Shopify", "Liquid", "CSS"],
    },
    {
      name: "iAssess",
      imgSrc: "/projects/iassess.jpg",
      company: "Nerubia Web Solutions",
      date: "2015 — 2016",
      description:
        "A data-heavy assessment platform for Singapore companies with complex exam algorithms and PDF score generation.",
      url: "https://measure.iassessonline.com/",
      hasLiveDemo: true,
      tech: ["AngularJS", "Laravel", "MySQL"],
    },
    {
      name: "Groupjump",
      imgSrc: "/projects/groupjump.jpg",
      company: "NextIX Inc.",
      date: "2014 — 2015",
      description:
        'Social web app featuring "jumpsites" — Facebook-group-like communities for like-minded people to interact and socialize.',
      url: null,
      hasLiveDemo: false,
      tech: ["jQuery", "Laravel", "PHP"],
    },
    {
      name: "Helpyoumarry",
      imgSrc: "/projects/helpyoumarry.jpg",
      company: "QLICK & PAIR",
      date: "2013",
      description:
        "WordPress website built from scratch for a wedding planner, featuring a custom Bootstrap CSS theme.",
      url: null,
      hasLiveDemo: false,
      tech: ["WordPress", "Bootstrap", "jQuery"],
    },
    {
      name: "QuickQuotz",
      imgSrc: "/projects/quickquotz.jpg",
      company: "QLICK & PAIR",
      date: "2013",
      description:
        "WordPress image-quote sharing site with multiple categories like inspirational, relationships, and more.",
      url: null,
      hasLiveDemo: false,
      tech: ["WordPress", "Bootstrap", "jQuery"],
    },
    {
      name: "Mocha Chai Laboratories",
      imgSrc: "/projects/mochachai.jpg",
      company: "iCreative Solution",
      date: "2013",
      description:
        "WordPress site for a boutique hotel in Malaysia with custom theme using Bootstrap CSS and jQuery.",
      url: "http://mochachailab.com/dev1/",
      hasLiveDemo: true,
      tech: ["WordPress", "Bootstrap", "Photoshop"],
    },
    {
      name: "IamJazz",
      imgSrc: "/projects/iamjazz.jpg",
      company: "iCreative Solution",
      date: "2013",
      description:
        "Existing WordPress boutique hotel site requiring bug fixes, new pages, and IE-compatibility patching.",
      url: null,
      hasLiveDemo: false,
      tech: ["WordPress", "CSS", "jQuery"],
    },
  ];

  let sectionEl: HTMLElement;
  let leftColEl: HTMLElement;
  let imageEls: HTMLElement[] = [];
  let activeIndex = $state(0);
  let scrollTriggers: any[] = [];

  function padIndex(i: number): string {
    return String(i + 1).padStart(2, "0");
  }

  onMount(async () => {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    // Set initial stacked positions
    imageEls.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, {
        y: i * 22,
        scale: 1 - i * 0.04,
        rotation: i * 1.2,
        zIndex: projects.length - i,
        opacity: i === 0 ? 1 : 0.7 - i * 0.08,
      });
    });

    // For each project entry, create a ScrollTrigger
    const entries = leftColEl?.querySelectorAll<HTMLElement>(".project-entry");
    entries?.forEach((entry, i) => {
      const st = ScrollTrigger.create({
        trigger: entry,
        start: "top 55%",
        end: "bottom 45%",
        onEnter: () => activateProject(i),
        onEnterBack: () => activateProject(i),
      });
      scrollTriggers.push(st);
    });
  });

  function activateProject(index: number) {
    if (typeof window === "undefined") return;
    import("gsap").then(({ gsap }) => {
      activeIndex = index;
      imageEls.forEach((el, i) => {
        if (!el) return;
        const offset = i - index;
        gsap.to(el, {
          duration: 0.55,
          ease: "power2.out",
          y: offset === 0 ? 0 : offset > 0 ? offset * 22 : offset * 14,
          scale: offset === 0 ? 1 : offset > 0 ? 1 - offset * 0.04 : 1 - Math.abs(offset) * 0.03,
          rotation: offset === 0 ? 0 : offset * 1.5,
          zIndex: offset === 0 ? projects.length + 1 : projects.length - i,
          opacity: offset === 0 ? 1 : Math.abs(offset) <= 2 ? 0.5 - Math.abs(offset) * 0.1 : 0,
        });
      });
    });
  }

  onDestroy(() => {
    scrollTriggers.forEach((st) => st?.kill());
  });
</script>

<section
  id="projects"
  class="w-full py-28 px-6 md:px-12 lg:px-20"
  style="background: var(--section-bg); color: var(--section-text);"
  bind:this={sectionEl}
>
  <div class="max-w-7xl mx-auto">
    <!-- Section label -->
    <p
      class="text-[10px] tracking-[0.25em] uppercase font-medium mb-4"
      style="color: oklch(68% 0.13 196);"
      data-aos="fade-up"
    >
      // PROJECTS
    </p>

    <!-- Section heading -->
    <h2
      class="font-outfit font-black text-[clamp(2.5rem,6vw,5rem)] leading-none mb-20"
      style="color: var(--section-text);"
      data-aos="fade-up"
      data-aos-delay="80"
    >
      Selected<span style="color: oklch(68% 0.13 196);">Work.</span>
    </h2>

    <!-- Two-column layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      <!-- Left: scrollable project list -->
      <div bind:this={leftColEl}>
        {#each projects as project, i}
          <div
            class="project-entry py-12"
            style="border-bottom: 1px solid var(--border-subtle);"
            data-aos="fade-up"
            data-aos-delay={i * 40}
          >
            <div class="flex items-start justify-between gap-4 mb-4">
              <span
                class="text-[11px] font-mono tracking-widest"
                style="color: oklch(68% 0.13 196);">{padIndex(i)}</span
              >
              {#if project.hasLiveDemo && project.url}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-[11px] tracking-wide transition-opacity opacity-60 hover:opacity-100"
                  style="color: var(--section-text);"
                  aria-label="Live demo for {project.name}"
                >
                  <ExternalLink size={13} /> Live Demo
                </a>
              {/if}
            </div>

            <h3
              class="font-outfit font-bold text-2xl md:text-3xl mb-2"
              style="color: var(--section-text);"
            >
              {project.name}
            </h3>

            <p class="text-xs tracking-wide mb-4" style="color: oklch(68% 0.13 196);">
              {project.company} · {project.date}
            </p>

            <p class="text-sm leading-relaxed mb-5" style="color: var(--section-muted);">
              {project.description}
            </p>

            <!-- Mobile image (only visible on small screens) -->
            <div class="lg:hidden rounded-xl overflow-hidden aspect-video mb-5">
              <img
                src={project.imgSrc}
                alt={project.name}
                class="w-full h-full object-cover object-top"
              />
            </div>

            <div class="flex flex-wrap gap-2">
              {#each project.tech as tag}
                <span
                  class="text-[10px] tracking-wide px-2.5 py-1 rounded-full"
                  style="background: var(--pill-bg); border: 1px solid var(--border-subtle); color: var(--section-muted);"
                  >{tag}</span
                >
              {/each}
            </div>
          </div>
        {/each}
      </div>

      <!-- Right: sticky stacked image panel (desktop only) -->
      <div class="hidden lg:flex items-center justify-center sticky top-[15vh] h-[70vh]">
        <div class="relative w-full max-w-[480px] aspect-[4/3]">
          {#each projects as project, i}
            <div
              bind:this={imageEls[i]}
              class="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl will-change-transform"
            >
              <img src={project.imgSrc} alt={project.name} class="w-full h-full object-cover" />
              <!-- Overlay label -->
              <div
                class="absolute bottom-0 left-0 right-0 p-4"
                style="background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);"
              >
                <p class="text-white text-sm font-semibold">{project.name}</p>
                <p class="text-white/60 text-xs">{project.company}</p>
              </div>
            </div>
          {/each}
        </div>

        <!-- Active indicator dots -->
        <div class="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 -mr-6">
          {#each projects as _, i}
            <button
              onclick={() => activateProject(i)}
              class="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style="background: {activeIndex === i
                ? 'oklch(68% 0.13 196)'
                : 'rgba(255,255,255,0.25)'}; transform: scale({activeIndex === i ? 1.4 : 1});"
              aria-label="Go to project {i + 1}"
            ></button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
