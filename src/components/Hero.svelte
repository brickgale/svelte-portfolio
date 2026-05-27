<script lang="ts">
  import { MapPin, Download, ArrowDown } from "@lucide/svelte";
  import Button from "@components/ui/Button.svelte";

  function downloadResume() {
    window.open("https://brian.monsales.net/Resume-2025.pdf", "_blank");
  }

  function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  const stats = [
    { value: "13+", label: "YRS EXPERIENCE" },
    { value: "34", label: "PROJECTS" },
    { value: "13", label: "TECH STACK" },
    { value: "3", label: "CORE SERVICES" },
  ];

  // 3D card tilt state
  let cardEl: HTMLDivElement;
  let tiltX = $state(0);
  let tiltY = $state(0);
  let glowX = $state(50);
  let glowY = $state(50);
  let isHovered = $state(false);

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
</script>

<section
  id="hero"
  class="relative min-h-[100svh] w-full flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-hidden"
  style="background: var(--section-bg); color: var(--section-text);"
>
  <!-- Subtle radial glow (brand accent) -->
  <div
    class="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10"
    style="background: radial-gradient(circle, oklch(50% 0.24 18) 0%, transparent 70%);"
  ></div>

  <div class="relative z-10 max-w-7xl mx-auto w-full pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20">
    <div
      class="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center"
    >
      <!-- Left: all text content -->
      <div>
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
          <span class="block text-[clamp(2.8rem,7.5vw,6.5rem)]" style="color: oklch(50% 0.24 18);"
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
          class="text-base md:text-lg max-w-lg leading-relaxed mb-10"
          style="color: var(--section-muted);"
          data-aos="fade-up"
          data-aos-delay="320"
        >
          Building performant, user-friendly web experiences — from pixel-perfect frontends to
          scalable APIs.
        </p>

        <!-- CTAs -->
        <div class="flex flex-row gap-4 mb-10 md:mb-16" data-aos="fade-up" data-aos-delay="400">
          <Button type="primary" withBeam onclick={scrollToProjects}>View Projects</Button>
          <Button type="neutral" onclick={downloadResume}>
            <Download size={16} class="mr-2" /> Resume
          </Button>
        </div>

        <!-- Mobile profile image -->
        <div
          class="lg:hidden mb-10 rounded-xl overflow-hidden"
          style="border: 1px solid var(--border-subtle); background: var(--pill-bg);"
          data-aos="fade-up"
          data-aos-delay="460"
        >
          <img
            src="/profile-pic.jpg"
            alt="Brian Monsales"
            class="w-full aspect-[4/5] object-cover object-top"
          />
        </div>

        <!-- Stat strip -->
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-6"
          style="border-top: 1px solid var(--border-subtle);"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {#each stats as stat}
            <div class="pt-6">
              <div
                class="text-3xl md:text-4xl font-black font-outfit mb-1"
                style="color: var(--section-text);"
              >
                {stat.value}
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
          class="card relative w-full max-w-[320px] overflow-hidden cursor-default select-none"
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
              class="w-full aspect-[3/4] object-cover object-top"
              style="border-radius: 0.65rem;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll hint -->
  <div
    class="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-40"
    data-aos="fade-up"
    data-aos-delay="700"
  >
    <span class="text-[10px] tracking-widest uppercase" style="color: var(--section-muted);"
      >Scroll</span
    >
    <ArrowDown size={14} style="color: var(--section-muted);" />
  </div>
</section>
