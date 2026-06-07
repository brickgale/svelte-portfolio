<script lang="ts">
  const experiences = [
    {
      company: "PURE Property Management",
      role: "Senior Software Engineer",
      period: "2026 - Present",
      description:
        "Worked as a full stack developer on a robust property management system built with Vue.js and NestJS. Contributed to both frontend and backend development, implementing new features, optimizing performance, and ensuring code quality.",
      tags: ["Monorepo", "Vuejs", "Nestjs", "Microservices"],
    },
    {
      company: "Monstarlab Cebu",
      role: "Full Stack Developer",
      period: "2025 — 2026",
      description:
        "Working on a collaboration web app built with Nextjs. Primary role as Front-end Tech Lead, contributes code, code reviews, and guiding junior devs.",
      tags: ["Nextjs", "React", "Typescript", "TailwindCSS", "Storybook", "Team Lead"],
    },
    {
      company: "Optimail Co. Ltd. / Moebius Development",
      role: "Full Stack Developer",
      period: "2018 — 2024",
      description:
        "Main maintainer on Dating X — a multi-domain dating platform with theming, localization, push notifications, and multiple payment gateway integrations. Migrated the app from Laravel + AngularJS to Laravel 5 + Vue.js, added a full theming system with 3 completed themes, and became the main contributor and maintainer over 6 years.",
      tags: ["Vue.js", "Laravel", "PHP", "MySQL", "Push Notifications", "Payment Gateways"],
    },
    {
      company: "Freemight / Monstarlab Cebu",
      role: "Full Stack Developer",
      period: "2017 — 2018",
      description:
        "Built two products from scratch. Skill Shift — a Japanese job posting board with regional filtering built with Laravel + Vue.js. Mee2box — a Zoom-like video conferencing web app with file sharing, built with Laravel + Vue.js using PeerJS / SkyWayJS for WebRTC.",
      tags: ["Vue.js", "Laravel", "WebRTC", "SkyWayJS", "Japan"],
    },
    {
      company: "Sliding Monkey Web Development",
      role: "Full Stack Developer",
      period: "2016",
      description:
        "Maintained and extended two live e-commerce stores. Amsale — a Magento + WordPress wedding dress store with color swatches and product customizations. Kidsshoes — a Shopify store with Liquid templating, seasonal promos, and new feature additions.",
      tags: ["Magento", "Shopify", "WordPress", "Liquid", "PHP"],
    },
    {
      company: "Nerubia Web Solutions",
      role: "Full Stack Developer",
      period: "2015 — 2016",
      description:
        "Main maintainer of iAssess — a data-heavy assessment platform for Singapore companies using Laravel 4 and AngularJS. Managed complex exam algorithms, PDF report generation, thousands of records, and followed strict Agile sprint processes.",
      tags: ["AngularJS", "Laravel", "MySQL", "Agile", "Singapore"],
    },
    {
      company: "NextIX Inc.",
      role: "Web Team Lead",
      period: "2014 — 2015",
      description:
        'Web developer on Groupjump — a social media web app with a Facebook-groups-like "jumpsite" feature built on Laravel 4 + jQuery. Promoted to Assistant Team Lead and eventually Team Lead of the web team for the final sprint.',
      tags: ["jQuery", "Laravel", "Social Media", "Team Lead"],
    },
    {
      company: "QLICK & PAIR",
      role: "Frontend Developer",
      period: "2013",
      description:
        "Built two WordPress sites from scratch: Helpyoumarry (wedding planner site) and QuickQuotz (quote-sharing image site). Both used Bootstrap CSS and jQuery with custom themes.",
      tags: ["WordPress", "Bootstrap", "jQuery", "PHP"],
    },
    {
      company: "iCreative Solution",
      role: "Frontend Developer",
      period: "2013",
      description:
        "Bug fixes, UI improvements, and new page additions across two boutique hotel WordPress sites (Mocha Chai Laboratories and IamJazz) based in Malaysia. Handled IE-compatibility fixes and logo design.",
      tags: ["WordPress", "jQuery", "CSS", "Photoshop", "IE"],
    },
  ];
</script>

<section id="experience" data-theme="dark" class="w-full py-28 px-6 md:px-12 lg:px-20">
  <div class="max-w-7xl mx-auto">
    <!-- Section label -->
    <p
      class="text-[10px] tracking-[0.25em] uppercase font-medium mb-4"
      style="color: oklch(68% 0.13 196);"
      data-aos="fade-up"
    >
      // EXPERIENCE
    </p>

    <!-- Section heading -->
    <h2
      class="font-outfit font-black text-[clamp(2.5rem,6vw,5rem)] leading-none mb-20"
      data-aos="fade-up"
      data-aos-delay="80"
    >
      Work<span style="color: oklch(68% 0.13 196);">History.</span>
    </h2>

    <!-- Timeline -->
    <div class="relative">
      <!-- Vertical line -->
      <div
        class="absolute left-0 top-0 bottom-0 w-px hidden md:block"
        style="background: linear-gradient(to bottom, oklch(68% 0.13 196), transparent);"
      ></div>

      <div class="flex flex-col gap-0">
        {#each experiences as exp, i}
          <div
            class="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-12 py-10 md:pl-10"
            style="border-bottom: 1px solid rgba(255,255,255,0.06);"
            data-aos="fade-up"
            data-aos-delay={100 + i * 60}
          >
            <!-- Left: period + company -->
            <div class="flex flex-col gap-1">
              <!-- Timeline dot (desktop) -->
              <div
                class="absolute -left-[5px] hidden md:block w-[11px] h-[11px] rounded-full border-2"
                style="background: #111; border-color: oklch(68% 0.13 196);"
              ></div>
              <span class="text-xs tracking-widest font-mono" style="color: oklch(68% 0.13 196);"
                >{exp.period}</span
              >
              <span class="text-sm font-semibold leading-snug" style="color: #e5e7eb;"
                >{exp.company}</span
              >
            </div>

            <!-- Right: role + description + tags -->
            <div>
              <h3 class="text-lg font-bold mb-3" style="color: #f9fafb;">{exp.role}</h3>
              <p class="text-sm leading-relaxed mb-5" style="color: #9ca3af;">{exp.description}</p>
              <div class="flex flex-wrap gap-2">
                {#each exp.tags as tag}
                  <span
                    class="text-[10px] tracking-wide px-2.5 py-1 rounded-full"
                    style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #9ca3af;"
                  >
                    {tag}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
