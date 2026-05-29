<script lang="ts">
  import { XIcon, AlignRightIcon, Sun, Moon } from "@lucide/svelte";
  import { fly } from "svelte/transition";
  import { useClickOutside } from "../lib/useClickOutside";
  import { themeStore } from "../lib/themeStore";

  type ClassConfig = {
    mobile: string;
  };

  let isMobileNavOpen = $state<boolean>(false);
  let activeAnchor = $state<string>("about");
  let isScrolled = $state<boolean>(false);
  let isDarkSection = $state<boolean>(false);
  let headerRef = $state<HTMLElement>();
  let mobileNavRef = $state<HTMLElement>();
  let hamburgerRef = $state<HTMLButtonElement>();

  const anchors = ["about", "experience", "projects"];
  const defaultClasses: ClassConfig = {
    mobile:
      "text-xl font-semibold py-4 px-6 my-2 text-(--section-muted) hover:text-(--ui-primary) hover:bg-[#14b8a614] rounded-lg transition-all duration-300 capitalize border-l-2 border-transparent hover:border-(--ui-primary) mobile-nav-item",
  };
  const activeClasses: ClassConfig = {
    mobile: "active !text-[var(--ui-primary)] !bg-[#14b8a622] !border-(--ui-primary)",
  };

  const isInvertedHeader = (): boolean => theme === "light" && isDarkSection;

  const desktopAnchorClasses = (anchor: string): string => {
    const base = isInvertedHeader()
      ? "text-sm font-medium px-4 py-2 text-white/70 hover:text-white transition-all duration-300 capitalize"
      : "text-sm font-medium px-4 py-2 text-(--section-muted) hover:text-(--ui-primary) transition-all duration-300 capitalize";

    return activeAnchor === anchor ? `${base} active !text-(--ui-primary)` : base;
  };

  const mobileAnchorClasses = (anchor: string): string => {
    return activeAnchor === anchor
      ? `${defaultClasses.mobile} ${activeClasses.mobile}`
      : defaultClasses.mobile;
  };

  const themeToggleClasses = (): string => {
    return isInvertedHeader()
      ? "ml-2 p-2 text-white/70 hover:text-white transition-all duration-300"
      : "ml-2 p-2 text-(--section-muted) hover:text-(--section-text) transition-all duration-300";
  };

  const logoColorClass = (): string => {
    return theme === "dark" || isInvertedHeader() ? "bg-white" : "bg-zinc-900";
  };

  const mobileToggleClasses = (): string => {
    return isInvertedHeader()
      ? "md:hidden text-2xl text-white focus:outline-none z-60 flex justify-center items-center"
      : "md:hidden text-2xl text-(--section-text) focus:outline-none z-60 flex justify-center items-center";
  };

  let theme = $state<"dark" | "light">("dark");

  $effect(() => {
    themeStore.init();
    themeStore.subscribe((t) => (theme = t));
  });

  $effect(() => {
    const updateHeaderState = () => {
      isScrolled = window.scrollY > 16;

      const headerBottom = headerRef?.getBoundingClientRect().bottom ?? 64;
      const probeY = Math.min(window.innerHeight - 1, Math.max(1, headerBottom + 8));
      const probeElement = document.elementFromPoint(window.innerWidth / 2, probeY);

      isDarkSection = probeElement?.closest('[data-theme="dark"]') !== null;
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  });

  $effect(() => {
    const updateActiveFromScroll = () => {
      const triggerY = window.innerHeight * 0.35;
      let nextActive = activeAnchor;

      for (const id of anchors) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom > triggerY) {
          nextActive = id;
        }
      }

      if (nextActive !== activeAnchor) {
        addActiveToNav(nextActive);
      }
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
    };
  });

  // Click outside handler for mobile nav
  $effect(() => {
    if (isMobileNavOpen) {
      return useClickOutside(() => {
        isMobileNavOpen = false;
      }, [mobileNavRef, hamburgerRef]);
    }
  });

  function handleClick(e: MouseEvent, name: string): void {
    if (typeof name !== "undefined") {
      addActiveToNav(name);
      isMobileNavOpen = false;
    }
  }

  function handleLogoClick(e: MouseEvent): void {
    e.preventDefault();
    isMobileNavOpen = false;
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Keep URL clean when returning to the top section.
    if (window.location.hash) {
      const cleanUrl = `${window.location.pathname}${window.location.search}`;
      window.history.replaceState(null, "", cleanUrl);
    }
  }

  function addActiveToNav(name: string): void {
    activeAnchor = name;
  }
</script>

<header
  bind:this={headerRef}
  class={`fixed inset-x-0 top-0 z-50 px-6 md:px-12 lg:px-20 border-b transition-all duration-300 ${isInvertedHeader() ? "border-white/10" : "border-(--pill-border)"} ${isScrolled ? (isInvertedHeader() ? "bg-black/35 backdrop-blur-md" : "bg-(--section-bg)/20 backdrop-blur-md") : "bg-transparent"}`}
>
  <div class="flex justify-between items-center py-2 max-w-7xl mx-auto w-full relative z-50">
    <a
      href="#hero"
      onclick={handleLogoClick}
      class="text-2xl font-bold relative"
      data-aos="fade-right"
      data-aos-delay="200"
      aria-label="logo"
    >
      <span
        class={`logo w-8 h-8 top-1 inline-block hover:bg-(--ui-primary) relative z-20 ${logoColorClass()}`}
      ></span>
    </a>

    <!-- Hamburger Menu Button -->
    <button
      bind:this={hamburgerRef}
      class={mobileToggleClasses()}
      aria-label="Toggle navigation"
      onclick={() => (isMobileNavOpen = !isMobileNavOpen)}
      data-aos="fade-left"
      data-aos-delay="200"
    >
      {#if isMobileNavOpen}
        <XIcon size="30" />
      {:else}
        <AlignRightIcon size="30" />
      {/if}
    </button>

    <!-- Desktop Navigation -->
    <nav
      id="desktop-nav"
      class="hidden md:flex items-center gap-1"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      {#each anchors as anchor}
        <a
          href={`#${anchor}`}
          data-name={anchor}
          class={desktopAnchorClasses(anchor)}
          onclick={(e) => handleClick(e, anchor)}
        >
          {anchor}
        </a>
      {/each}
      <button onclick={themeStore.toggle} aria-label="Toggle theme" class={themeToggleClasses()}>
        {#if theme === "light"}
          <Moon size={16} />
        {:else}
          <Sun size={16} />
        {/if}
      </button>
    </nav>

    <!-- Mobile Navigation -->
    {#if isMobileNavOpen}
      <nav
        bind:this={mobileNavRef}
        id="mobile-nav"
        class="fixed top-0 right-0 h-screen w-[280px] flex flex-col pt-20 px-6 z-50 md:hidden border-l border-(--pill-border) mobile-nav-menu"
        style="background: var(--section-bg); color: var(--section-text);"
        transition:fly={{ x: 280, duration: 300, opacity: 1 }}
      >
        {#each anchors as anchor, i}
          <a
            href={`#${anchor}`}
            data-name={anchor}
            class={mobileAnchorClasses(anchor)}
            onclick={(e) => handleClick(e, anchor)}
            style="animation-delay: {100 + i * 50}ms"
          >
            {anchor}
          </a>
        {/each}
        <button
          onclick={() => {
            themeStore.toggle();
            isMobileNavOpen = false;
          }}
          aria-label="Toggle theme"
          class="text-xl font-semibold py-4 px-6 my-2 text-(--section-muted) hover:text-(--ui-primary) hover:bg-[#14b8a614] rounded-lg transition-all duration-300 flex items-center gap-3 border-l-2 border-transparent hover:border-(--ui-primary) mobile-nav-item"
          style="animation-delay: {100 + anchors.length * 50}ms"
        >
          {#if theme === "light"}
            <Moon size={20} />
            <span>Dark Mode</span>
          {:else}
            <Sun size={20} />
            <span>Light Mode</span>
          {/if}
        </button>
      </nav>
    {/if}
  </div>
</header>
