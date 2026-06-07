<script lang="ts">
  import { Mail, Github, Linkedin, Dribbble } from "@lucide/svelte";

  type TechItem = { name: string; svg_name: string; lightFix?: boolean };

  const techRows: Array<{ label: string; items: TechItem[] }> = [
    {
      label: "Languages & Foundations",
      items: [
        { name: "HTML", svg_name: "html" },
        { name: "CSS", svg_name: "css" },
        { name: "Sass", svg_name: "sass" },
        { name: "JavaScript", svg_name: "javascript" },
        { name: "TypeScript", svg_name: "typescript" },
        { name: "PHP", svg_name: "php", lightFix: true },
        { name: "Scala", svg_name: "scala" },
        { name: "Bash", svg_name: "bash", lightFix: true },
        { name: "jQuery", svg_name: "jquery_dark" },
      ],
    },
    {
      label: "Frontend & UI",
      items: [
        { name: "Vue", svg_name: "vue" },
        { name: "Nuxt", svg_name: "nuxt" },
        { name: "React", svg_name: "react" },
        { name: "Next.js", svg_name: "nextjs_icon_dark" },
        { name: "Svelte", svg_name: "svelte" },
        { name: "Astro", svg_name: "astro_dark" },
        { name: "Tailwind", svg_name: "tailwindcss" },
        { name: "Bootstrap", svg_name: "bootstrap" },
        { name: "Chart.js", svg_name: "chartjs" },
        { name: "Storybook", svg_name: "storybook" },
        { name: "Vite", svg_name: "vite" },
        { name: "Vitest", svg_name: "vitest" },
        { name: "Pinia", svg_name: "pinia" },
      ],
    },
    {
      label: "Backend, Data & Infra",
      items: [
        { name: "Node.js", svg_name: "nodejs" },
        { name: "Laravel", svg_name: "laravel" },
        { name: "NestJS", svg_name: "nestjs" },
        { name: "GraphQL", svg_name: "graphql" },
        { name: "Socket.IO", svg_name: "socketio-dark" },
        { name: "Swagger", svg_name: "swagger" },
        { name: "Prisma", svg_name: "prisma_dark" },
        { name: "MySQL", svg_name: "mysql" },
        { name: "PostgreSQL", svg_name: "postgresql" },
        { name: "SQLite", svg_name: "sqlite" },
        { name: "MongoDB", svg_name: "mongodb" },
        { name: "Redis", svg_name: "redis" },
        { name: "Docker", svg_name: "docker" },
        { name: "Nginx", svg_name: "nginx" },
        { name: "AWS", svg_name: "aws_dark" },
        { name: "Dotenv", svg_name: "dotenv" },
      ],
    },
    {
      label: "Workflow & Product",
      items: [
        { name: "Git", svg_name: "git" },
        { name: "GitHub", svg_name: "github-dark" },
        { name: "GitLab", svg_name: "gitlab" },
        { name: "Postman", svg_name: "postman" },
        { name: "VS Code", svg_name: "vscode" },
        { name: "Notion", svg_name: "notion" },
        { name: "Linear", svg_name: "linear" },
        { name: "Figma", svg_name: "figma" },
        { name: "Photoshop", svg_name: "photoshop" },
        { name: "WordPress", svg_name: "wordpress" },
        { name: "Homebrew", svg_name: "homebrew" },
        { name: "Antigravity", svg_name: "antigravity" },
        { name: "Hand Wave", svg_name: "hand-wave" },
      ],
    },
  ];

  const connect = [
    { icon: Mail, label: "brianmonsales@gmail.com", href: "mailto:brianmonsales@gmail.com" },
    { icon: Github, label: "github.com/brickgale", href: "https://github.com/brickgale" },
    {
      icon: Linkedin,
      label: "linkedin.com/in/brianmonsales",
      href: "https://www.linkedin.com/in/brianmonsales/",
    },
    { icon: Dribbble, label: "dribbble.com/brickgale", href: "https://dribbble.com/brickgale" },
  ];
</script>

<section
  id="about"
  class="w-full py-28 px-6 md:px-12 lg:px-20"
  style="background: var(--section-bg); color: var(--section-text);"
>
  <div class="max-w-7xl mx-auto">
    <!-- Section label -->
    <p
      class="text-[10px] tracking-[0.25em] uppercase font-medium mb-4"
      style="color: oklch(68% 0.13 196);"
      data-aos="fade-up"
    >
      // ABOUT
    </p>

    <!-- Section heading -->
    <h2
      class="font-outfit font-black text-[clamp(2.5rem,6vw,5rem)] leading-none mb-16"
      style="color: var(--section-text);"
      data-aos="fade-up"
      data-aos-delay="80"
    >
      About<span style="color: oklch(68% 0.13 196);">Me.</span>
    </h2>

    <!-- Two-column layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
      <!-- Left: bio + tech chips -->
      <div data-aos="fade-up" data-aos-delay="150">
        <p class="text-lg leading-relaxed mb-6" style="color: var(--section-text);">
          I'm a Full Stack Web Developer based in the Philippines with over 13+ years of experience
          building web applications across industries — from dating platforms and job boards to
          assessment tools and e-commerce stores.
        </p>
        <p class="text-base leading-relaxed mb-12" style="color: var(--section-muted);">
          I enjoy working across the entire stack: designing clean interfaces, architecting REST
          APIs, and everything in between. I've shipped projects for companies in Japan, Malaysia,
          Singapore, Thailand, and the US — always with a focus on performance and user experience.
        </p>

        <!-- Core Technologies -->
        <p
          class="text-[10px] tracking-[0.2em] uppercase font-semibold mb-5"
          style="color: var(--section-muted);"
        >
          Core Technologies
        </p>
        <div class="flex flex-col gap-3 tech-marquee-wrap">
          {#each techRows as row, rowIndex}
            <div class="tech-marquee-row-block">
              <div class="tech-marquee-row">
                <div
                  class={`tech-marquee-track ${rowIndex % 2 === 0 ? "tech-marquee-left" : "tech-marquee-right"}`}
                  style={`--marquee-duration: ${190 + rowIndex * 16}s;`}
                >
                  {#each [...row.items, ...row.items] as t, chipIndex}
                    <span
                      class="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full shrink-0"
                      style="background: var(--pill-bg); border: 1px solid var(--border-subtle); color: var(--section-text);"
                      aria-hidden={chipIndex >= row.items.length}
                    >
                      <img
                        src={`/svg_icons/${t.svg_name}.svg`}
                        alt={t.name}
                        class={`h-3.5 w-3.5 object-contain opacity-80 ${t.lightFix ? "tech-icon-light-fix" : ""}`}
                      />
                      {t.name}
                    </span>
                  {/each}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Right: status + connect -->
      <div class="flex flex-col gap-10" data-aos="fade-up" data-aos-delay="250">
        <!-- Availability -->
        <div
          class="p-6 rounded-xl"
          style="background: var(--pill-bg); border: 1px solid var(--border-subtle);"
        >
          <p
            class="text-[10px] tracking-[0.2em] uppercase font-semibold mb-4"
            style="color: var(--section-muted);"
          >
            Availability
          </p>
          <div class="flex items-center gap-3 mb-2">
            <span class="relative flex h-2.5 w-2.5">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
              ></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            <span class="text-sm font-medium" style="color: var(--section-text);"
              >Open to opportunities</span
            >
          </div>
          <div class="flex flex-col gap-1 pl-5">
            <span class="text-xs" style="color: var(--section-muted);">✓ Project-based</span>
            <span class="text-xs" style="color: var(--section-muted);">✓ Consulting</span>
          </div>
        </div>

        <!-- Connect -->
        <div>
          <p
            class="text-[10px] tracking-[0.2em] uppercase font-semibold mb-5"
            style="color: var(--section-muted);"
          >
            Connect
          </p>
          <div class="flex flex-col gap-3">
            {#each connect as link}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-3 text-sm transition-all duration-200"
                style="color: var(--section-muted);"
              >
                <svelte:component
                  this={link.icon}
                  size={15}
                  class="opacity-60 group-hover:opacity-100 transition-opacity"
                  style="color: oklch(68% 0.13 196);"
                />
                <span class="group-hover:underline underline-offset-4">{link.label}</span>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  :global([data-theme="light"] .tech-icon-light-fix) {
    filter: brightness(0.28);
    opacity: 1;
  }

  .tech-marquee-wrap {
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  }

  .tech-marquee-row {
    overflow: hidden;
    width: 100%;
  }

  .tech-row-label {
    font-size: 0.625rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--section-muted);
    margin: 0 0 0.375rem;
  }

  .tech-marquee-track {
    display: inline-flex;
    gap: 0.5rem;
    width: max-content;
    min-width: 100%;
    animation-duration: var(--marquee-duration, 160s);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    will-change: transform;
  }

  .tech-marquee-left {
    animation-name: techMarqueeLeft;
  }

  .tech-marquee-right {
    animation-name: techMarqueeRight;
  }

  @keyframes techMarqueeLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @keyframes techMarqueeRight {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .tech-marquee-track {
      animation: none;
    }
  }
</style>
