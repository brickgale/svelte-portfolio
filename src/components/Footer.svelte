<script lang="ts">
  import { Github, Linkedin, Mail, Dribbble } from "@lucide/svelte";

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ];

  const connectLinks = [
    { icon: Mail, label: "Email", href: "mailto:brianmonsales@gmail.com" },
    { icon: Github, label: "GitHub", href: "https://github.com/brickgale" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/brianmonsales/" },
    { icon: Dribbble, label: "Dribbble", href: "https://dribbble.com/brickgale" },
  ];
</script>

<footer
  id="contact"
  class="w-full pt-20 pb-10 px-6 md:px-12 lg:px-20"
  style="background: #080808; border-top: 1px solid rgba(255,255,255,0.07);"
>
  <div class="max-w-7xl mx-auto">
    <!-- Top row -->
    <div
      class="grid grid-cols-1 md:grid-cols-[1fr_minmax(180px,220px)_minmax(200px,240px)] gap-12 md:gap-14 lg:gap-20 mb-16"
    >
      <!-- Left: name + tagline + socials -->
      <div>
        <h3 class="font-outfit font-black text-2xl mb-2" style="color: #f9fafb;" data-aos="fade-up">
          Brian Monsales.
        </h3>
        <p
          class="text-sm leading-relaxed max-w-xs mb-6"
          style="color: #6b7280;"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          Full Stack Web Developer building performant, user-friendly web experiences.
        </p>
        <div class="flex gap-4" data-aos="fade-up" data-aos-delay="100">
          {#each connectLinks as link}
            <a
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={link.label}
              class="transition-opacity opacity-50 hover:opacity-100"
              style="color: #f9fafb;"
            >
              <svelte:component this={link.icon} size={18} />
            </a>
          {/each}
        </div>
      </div>

      <!-- Navigation -->
      <div data-aos="fade-up" data-aos-delay="80">
        <p
          class="text-[10px] tracking-[0.2em] uppercase font-semibold mb-5"
          style="color: #6b7280;"
        >
          Navigation
        </p>
        <ul class="flex flex-col gap-4">
          {#each navLinks as link}
            <li>
              <a
                href={link.href}
                class="text-[15px] transition-colors duration-200"
                style="color: #9ca3af;"
                onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f9fafb")}
                onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9ca3af")}
                >{link.label}</a
              >
            </li>
          {/each}
        </ul>
      </div>

      <!-- Connect -->
      <div data-aos="fade-up" data-aos-delay="120">
        <p
          class="text-[10px] tracking-[0.2em] uppercase font-semibold mb-5"
          style="color: #6b7280;"
        >
          Connect
        </p>
        <ul class="flex flex-col gap-4">
          {#each connectLinks as link}
            <li>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2.5 text-[15px] transition-colors duration-200"
                style="color: #9ca3af;"
                onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f9fafb")}
                onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9ca3af")}
              >
                <svelte:component this={link.icon} size={13} />
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8"
      style="border-top: 1px solid rgba(255,255,255,0.06);"
    >
      <p class="text-xs" style="color: #4b5563;">
        © {new Date().getFullYear()} Brian Monsales. All rights reserved.
      </p>
      <span
        class="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full font-semibold"
        style="background: rgba(34,197,94,0.1); color: #4ade80; border: 1px solid rgba(34,197,94,0.2);"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block"></span>
        Available for Hire
      </span>
    </div>
  </div>
</footer>
