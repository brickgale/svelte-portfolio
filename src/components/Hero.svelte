<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { MapPin, Download, ArrowDown } from "@lucide/svelte";
  import Button from "@components/ui/Button.svelte";

  function downloadResume() {
    window.open("https://brian.monsales.net/Resume-2025.pdf", "_blank");
  }

  function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  const stats = [
    { target: 13, suffix: "+", label: "YRS EXPERIENCE" },
    { target: 34, suffix: "", label: "PROJECTS" },
    { target: 13, suffix: "", label: "TECH STACK" },
    { target: 3, suffix: "", label: "CORE SERVICES" },
  ];
  const STATS_AOS_DELAY_MS = 500;

  // 3D card tilt state
  let cardEl: HTMLDivElement;
  let tiltX = $state(0);
  let tiltY = $state(0);
  let glowX = $state(50);
  let glowY = $state(50);
  let isHovered = $state(false);
  let statsStripEl = $state<HTMLElement>();
  let animatedStats = $state<number[]>(stats.map(() => 0));
  let hasAnimated = $state(false);
  let isAnimating = $state(false);
  let isStatsInView = $state(false);
  let frameId: number | null = null;
  let delayTimerId: number | null = null;
  let observer: IntersectionObserver | null = null;

  function handleMouseMove(e: MouseEvent) {
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    tiltX = (y / rect.height - 0.5) * 18;
    tiltY = (x / rect.width - 0.5) * -18;
    glowX = (x / rect.width) * 100;
    glowY = (y / rect.height) * 100;
    isHovered = true;
  }

  function handleMouseLeave() {
    tiltX = 0;
    tiltY = 0;
    glowX = 50;
    glowY = 50;
    isHovered = false;
  }

  function animateStats(duration: number = 1200) {
    if (isAnimating) return;

    isAnimating = true;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;

      animatedStats = stats.map((stat) => Math.round(stat.target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        animatedStats = stats.map((stat) => stat.target);
        frameId = null;
        isAnimating = false;
        hasAnimated = true;
      }
    };

    frameId = requestAnimationFrame(tick);
  }

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          if (isStatsInView || hasAnimated) return;

          isStatsInView = true;
          if (delayTimerId !== null) {
            clearTimeout(delayTimerId);
          }

          // Match count-up timing with the strip reveal animation.
          delayTimerId = window.setTimeout(() => {
            delayTimerId = null;
            animateStats();
          }, STATS_AOS_DELAY_MS);
          return;
        }

        isStatsInView = false;
        hasAnimated = false;

        if (delayTimerId !== null) {
          clearTimeout(delayTimerId);
          delayTimerId = null;
        }

        if (frameId !== null) {
          cancelAnimationFrame(frameId);
          frameId = null;
        }

        isAnimating = false;
        animatedStats = stats.map(() => 0);
      },
      { threshold: 0.35 }
    );

    if (statsStripEl) {
      observer.observe(statsStripEl);
    }
  });

  onDestroy(() => {
    if (delayTimerId !== null) {
      clearTimeout(delayTimerId);
      delayTimerId = null;
    }

    if (frameId !== null) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }

    observer?.disconnect();
    observer = null;
  });
</script>

<section
  id="home"
  class="relative min-h-svh w-full flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-hidden"
  style="background: var(--section-bg); color: var(--section-text);"
>
  <div class="relative z-10 max-w-7xl mx-auto w-full pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20">
    <!-- Subtle radial glow (brand accent) -->
    <div
      class="pointer-events-none absolute -top-40 -left-80 w-[600px] h-[600px] rounded-full opacity-10"
      style="background: radial-gradient(circle, oklch(68% 0.13 196) 0%, transparent 70%);"
    ></div>
    <div
      class="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center"
    >
      <!-- Left: all text content -->
      <div class="flex flex-col items-center text-center w-full lg:items-start lg:text-left">
        <!-- Location pill -->
        <p
          class="inline-flex items-center gap-1.5 text-xs font-light tracking-widest uppercase mb-8 px-4 py-2 rounded-full"
          style="background: var(--pill-bg); border: 1px solid var(--pill-border); color: var(--section-muted);"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <MapPin size={12} /> Tagbilaran City, Bohol, Philippines
        </p>

        <!-- Main title -->
        <h1
          class="font-outfit font-black leading-none tracking-tight mb-6"
          style="color: var(--section-text);"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span class="block text-[clamp(2.8rem,7.5vw,6.5rem)]">Brian</span>
          <span class="block text-[clamp(2.8rem,7.5vw,6.5rem)]" style="color: oklch(68% 0.13 196);"
            >Monsales.</span
          >
        </h1>

        <!-- Role -->
        <p
          class="text-xl md:text-2xl font-light tracking-wide mb-4"
          style="color: var(--section-muted);"
          data-aos="fade-up"
          data-aos-delay="280"
        >
          Full Stack Web Developer
        </p>

        <!-- Tagline -->
        <p
          class="text-base md:text-lg max-w-lg leading-relaxed mb-10 mx-auto lg:mx-0"
          style="color: var(--section-muted);"
          data-aos="fade-up"
          data-aos-delay="320"
        >
          Building performant, user-friendly web experiences — from pixel-perfect frontends to
          scalable APIs.
        </p>

        <!-- CTAs -->
        <div
          class="flex flex-row justify-center lg:justify-start gap-4 mb-10 md:mb-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Button type="primary" withBeam onclick={scrollToProjects}>View Projects</Button>
          <Button type="neutral" onclick={downloadResume}>
            <Download size={16} class="mr-2" /> Resume
          </Button>
        </div>

        <!-- Mobile profile image -->
        <div
          class="lg:hidden mb-10 w-fit mx-auto rounded-xl p-2 overflow-hidden rotate-3"
          style="border: 1px solid var(--border-subtle); background: var(--pill-bg);"
          data-aos="fade-up"
          data-aos-delay="460"
        >
          <img
            src="/profile-pic.jpg"
            alt="Brian Monsales"
            class="block w-[200px] max-w-full aspect-4/5 object-cover object-top rounded-lg"
          />
        </div>

        <!-- Stat strip -->
        <div
          bind:this={statsStripEl}
          class="w-full max-w-[400px] mx-auto lg:max-w-none grid grid-cols-2 lg:grid-cols-4 border-t border-(--border-subtle)"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {#each stats as stat, i}
            <div
              class="py-6 px-2 text-center border-(--border-subtle) odd:border-r nth-[n+3]:border-t lg:nth-[n+3]:border-t-0 lg:odd:border-r-0 lg:nth-[-n+3]:border-r"
            >
              <div
                class="text-3xl md:text-4xl font-black font-outfit mb-1"
                style="color: var(--section-text);"
              >
                {animatedStats[i]}{stat.suffix}
              </div>
              <div
                class="text-[10px] tracking-widest font-medium"
                style="color: var(--section-muted);"
              >
                {stat.label}
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Right: 3D profile card -->
      <div
        class="hidden lg:flex items-center justify-center"
        data-aos="fade-left"
        data-aos-delay="300"
        style="perspective: 900px;"
      >
        <!-- Card wrapper with 3D tilt -->
        <div
          bind:this={cardEl}
          onmousemove={handleMouseMove}
          onmouseleave={handleMouseLeave}
          class="card relative w-full max-w-[320px] overflow-hidden cursor-default select-none rotate-3"
          style="
            transform: perspective(900px) rotateX({tiltX}deg) rotateY({tiltY}deg) scale({isHovered
            ? 1.03
            : 1});
            transition: transform {isHovered ? '0.1s' : '0.5s'} ease;
            border: 1px solid var(--border-subtle);
            background: var(--pill-bg);
            box-shadow: {isHovered ? '0 30px 60px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.15)'};
            border-radius: 0.9rem;
          "
        >
          <!-- Shine overlay follows mouse -->
          <div
            class="pointer-events-none absolute inset-0 rounded-[0.9rem] z-10 opacity-0 transition-opacity duration-300"
            style="
              opacity: {isHovered ? 0.15 : 0};
              background: radial-gradient(circle at {glowX}% {glowY}%, rgba(255,255,255,0.6) 0%, transparent 60%);
            "
          ></div>

          <div class="p-3">
            <!-- Profile image -->
            <img
              src="/profile-pic.jpg"
              alt="Brian Monsales"
              class="w-full aspect-3/4 object-cover object-top"
              style="border-radius: 0.65rem;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
