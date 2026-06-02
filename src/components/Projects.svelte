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
  let imageViewportEls: HTMLElement[] = [];
  let imageMainEls: HTMLImageElement[] = [];
  let activeIndex = $state(0);
  let scrollTriggers: any[] = [];
  let imagePanDistances: number[] = [];
  let imageBaseOffsets: number[] = [];
  let imagePanPinned: boolean[] = [];
  let removeResizeListener: (() => void) | null = null;
  let gsapInstance: any;
  const maxStackDepth = 3;
  const stackOffsetY = 20;
  const stackScaleStep = 0.06;
  const imagePanSpeedPxPerSecond = 42;

  function padIndex(i: number): string {
    return String(i + 1).padStart(2, "0");
  }

  function updatePanMetrics(index: number) {
    const viewportEl = imageViewportEls[index];
    const imageEl = imageMainEls[index];
    if (!viewportEl || !imageEl) return;

    const { naturalWidth, naturalHeight } = imageEl;
    if (!naturalWidth || !naturalHeight) {
      imagePanDistances[index] = 0;
      imageBaseOffsets[index] = 0;
      return;
    }

    const viewportWidth = viewportEl.clientWidth;
    const viewportHeight = viewportEl.clientHeight;
    if (!viewportWidth || !viewportHeight) return;

    const renderedHeight = (viewportWidth * naturalHeight) / naturalWidth;
    const overflow = Math.max(0, renderedHeight - viewportHeight);
    const centeredOffset = overflow > 0 ? 0 : (viewportHeight - renderedHeight) / 2;

    imagePanDistances[index] = overflow;
    imageBaseOffsets[index] = centeredOffset;
  }

  function refreshAllPanMetrics() {
    projects.forEach((_, i) => updatePanMetrics(i));
  }

  function resetImagePan(index: number, instant = false) {
    const imageEl = imageMainEls[index];
    if (!imageEl || typeof window === "undefined" || !gsapInstance) return;

    updatePanMetrics(index);
    gsapInstance.killTweensOf(imageEl);
    gsapInstance.to(imageEl, {
      y: imageBaseOffsets[index] || 0,
      duration: instant ? 0 : 0.6,
      ease: "power2.out",
    });
  }

  function panImageDown(index: number) {
    const imageEl = imageMainEls[index];
    if (!imageEl || typeof window === "undefined" || !gsapInstance || index !== activeIndex) return;

    updatePanMetrics(index);
    const overflow = imagePanDistances[index] || 0;
    const startOffset = imageBaseOffsets[index] || 0;
    if (overflow < 2) {
      resetImagePan(index);
      return;
    }

    gsapInstance.killTweensOf(imageEl);
    gsapInstance.to(imageEl, {
      y: startOffset - overflow,
      duration: overflow / imagePanSpeedPxPerSecond,
      ease: "none",
    });
  }

  function handleImageHover(index: number) {
    if (index !== activeIndex) return;
    panImageDown(index);
  }

  function handleImageLeave(index: number) {
    if (index !== activeIndex || imagePanPinned[index]) return;
    resetImagePan(index);
  }

  function handleImageClick(index: number) {
    if (index !== activeIndex) return;
    imagePanPinned[index] = !imagePanPinned[index];
    if (imagePanPinned[index]) {
      panImageDown(index);
      return;
    }
    resetImagePan(index);
  }

  function handleImageLoad(index: number) {
    updatePanMetrics(index);
    resetImagePan(index, true);
  }

  onMount(async () => {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsapInstance = gsap;
    gsap.registerPlugin(ScrollTrigger);

    // Set initial stack: active on top, up to 3 cards above it.
    imageEls.forEach((el, i) => {
      if (!el) return;
      const offset = i;
      const inStack = offset > 0 && offset <= maxStackDepth;
      gsap.set(el, {
        y:
          offset === 0 ? 0 : inStack ? -offset * stackOffsetY : -(maxStackDepth + 1) * stackOffsetY,
        scale:
          offset === 0
            ? 1
            : inStack
              ? 1 - offset * stackScaleStep
              : 1 - (maxStackDepth + 1) * stackScaleStep,
        rotation: 0,
        zIndex: offset === 0 ? projects.length + 2 : projects.length - i,
        opacity: offset === 0 ? 1 : inStack ? 0.82 - (offset - 1) * 0.18 : 0,
      });
    });

    // For each project entry, create a ScrollTrigger
    const entries = leftColEl?.querySelectorAll<HTMLElement>(".project-entry");
    entries?.forEach((entry, i) => {
      const st = ScrollTrigger.create({
        trigger: entry,
        start: "top 55%",
        end: "bottom 45%",
        onEnter: (self: any) => activateProject(i, self?.direction || 1),
        onEnterBack: (self: any) => activateProject(i, self?.direction || -1),
      });
      scrollTriggers.push(st);
    });

    refreshAllPanMetrics();
    projects.forEach((_, i) => resetImagePan(i, true));

    const handleResize = () => {
      refreshAllPanMetrics();
      projects.forEach((_, i) => resetImagePan(i, true));
    };
    window.addEventListener("resize", handleResize);
    removeResizeListener = () => window.removeEventListener("resize", handleResize);
  });

  function activateProject(index: number, scrollDirection = 0) {
    if (typeof window === "undefined" || !gsapInstance) return;

    activeIndex = index;
    imagePanPinned = projects.map(() => false);

    imageMainEls.forEach((imageEl, i) => {
      if (!imageEl) return;
      updatePanMetrics(i);
      gsapInstance.killTweensOf(imageEl);
      gsapInstance.set(imageEl, {
        y: imageBaseOffsets[i] || 0,
      });
    });

    imageEls.forEach((el, i) => {
      if (!el) return;
      const offset = i - index;
      const inStack = offset > 0 && offset <= maxStackDepth;
      gsapInstance.to(el, {
        duration: 0.55,
        ease: "power2.out",
        y:
          offset === 0 ? 0 : inStack ? -offset * stackOffsetY : -(maxStackDepth + 1) * stackOffsetY,
        scale:
          offset === 0
            ? 1
            : inStack
              ? 1 - offset * stackScaleStep
              : 1 - (maxStackDepth + 1) * stackScaleStep,
        rotation: 0,
        zIndex: offset === 0 ? projects.length + 2 : projects.length - i,
        opacity: offset === 0 ? 1 : inStack ? 0.82 - (offset - 1) * 0.18 : 0,
      });
    });

    if (scrollDirection > 0) {
      gsapInstance.delayedCall(0.12, () => {
        if (activeIndex === index) panImageDown(index);
      });
      return;
    }

    resetImagePan(index, false);
  }

  onDestroy(() => {
    scrollTriggers.forEach((st) => st?.kill());
    removeResizeListener?.();
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
      <div class="hidden lg:flex items-center justify-center sticky top-[8vh] h-[82vh]">
        <div class="relative w-full max-w-[560px] aspect-4/5">
          <!-- Story-style active indicator lines -->
          <div class="absolute top-18 left-3 right-3 z-30 flex gap-1.5">
            {#each projects as _, i}
              <button
                onclick={(event) => {
                  event.stopPropagation();
                  activateProject(i);
                }}
                class="h-0.5 flex-1 rounded-full transition-colors duration-300"
                style="background: {activeIndex === i
                  ? 'oklch(68% 0.13 196)'
                  : 'rgba(255,255,255,0.3)'}; box-shadow: 0 0 0.5px rgba(0,0,0,0.65), 0 1px 3px rgba(0,0,0,0.35);"
                aria-label="Go to project {i + 1}"
              ></button>
            {/each}
          </div>

          {#each projects as project, i}
            <div
              bind:this={imageEls[i]}
              class="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl will-change-transform origin-top top-15 {activeIndex ===
              i
                ? 'cursor-pointer pointer-events-auto'
                : 'pointer-events-none'}"
              role="button"
              tabindex={activeIndex === i ? 0 : -1}
              aria-label="Preview {project.name} image"
              onmouseenter={() => handleImageHover(i)}
              onmouseleave={() => handleImageLeave(i)}
              onclick={() => handleImageClick(i)}
              onkeydown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleImageClick(i);
                }
              }}
            >
              <!-- Blurred fill keeps the frame full when source image is short -->
              <img
                src={project.imgSrc}
                alt=""
                aria-hidden="true"
                class="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-100"
              />
              <div class="absolute inset-0 bg-black/40"></div>

              <div bind:this={imageViewportEls[i]} class="absolute inset-0 overflow-hidden">
                <img
                  bind:this={imageMainEls[i]}
                  src={project.imgSrc}
                  alt={project.name}
                  class="w-full h-auto object-top will-change-transform"
                  onload={() => handleImageLoad(i)}
                />
              </div>

              <!-- Overlay label -->
              <div
                class="absolute bottom-0 left-0 right-0 p-4 z-20"
                style="background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);"
              >
                <p class="text-white text-sm font-semibold">{project.name}</p>
                <p class="text-white/60 text-xs">{project.company}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
