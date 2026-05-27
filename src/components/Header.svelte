<script lang="ts">
  import { XIcon, AlignRightIcon, Sun, Moon } from "@lucide/svelte";
  import { fly } from "svelte/transition";
  import { useClickOutside } from "../lib/useClickOutside";
  import { themeStore } from "../lib/themeStore";

  type ClassConfig = {
    desktop: string;
    mobile: string;
  };

  let isMobileNavOpen = $state<boolean>(false);
  let activeAnchor = $state<string>("about");
  let mobileNavRef = $state<HTMLElement>();
  let hamburgerRef = $state<HTMLButtonElement>();

  const anchors = ["about", "experience", "projects"];
  const defaultClasses: ClassConfig = {
    desktop:
      "text-sm font-medium px-4 py-2 rounded-full text-[color:var(--section-muted)] hover:text-[var(--ui-primary)] hover:bg-[#e02b4514] transition-all duration-300 capitalize",
    mobile:
      "text-xl font-semibold py-4 px-6 my-2 text-[color:var(--section-muted)] hover:text-[var(--ui-primary)] hover:bg-[#e02b4514] rounded-lg transition-all duration-300 capitalize border-l-2 border-transparent hover:border-(--ui-primary) mobile-nav-item",
  };
  const activeClasses: ClassConfig = {
    desktop: "active !text-[var(--ui-primary)] !bg-[#e02b4522]",
    mobile: "active !text-[var(--ui-primary)] !bg-[#e02b4522] !border-(--ui-primary)",
  };

  const anchorClasses = (anchor: string, isMobile: boolean = false): string => {
    return activeAnchor === anchor
      ? `${getClass(defaultClasses, isMobile)} ${getClass(activeClasses, isMobile)}`
      : getClass(defaultClasses, isMobile);
  };

  const getClass = (classes: ClassConfig, isMobile: boolean): string => {
    return isMobile ? classes.mobile : classes.desktop;
  };

  let theme = $state<"dark" | "light">("dark");

  $effect(() => {
    themeStore.init();
    themeStore.subscribe((t) => (theme = t));
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

  function addActiveToNav(name: string): void {
    activeAnchor = name;
  }

</script>

<header class="fixed inset-x-0 top-0 z-50 px-6 md:px-12 lg:px-20">
  <div class="flex justify-between items-center py-3 max-w-7xl mx-auto w-full relative z-50">
    <a
      href="#hero"
      onclick={(e) => handleClick(e, "hero")}
      class="text-2xl font-bold relative"
      data-aos="fade-right"
      data-aos-delay="200"
      aria-label="logo"
    >
      <span
        class={`logo w-8 h-8 top-1 md:w-10 md:h-10 inline-block hover:bg-(--ui-primary) relative z-20 ${theme === "light" ? "bg-zinc-900" : "bg-white"}`}
      ></span>
      <div
        class={`absolute rounded-full -top-30 left-1/2 transform -translate-x-1/2 size-[300px] z-10 bg-(--ui-primary) blur-[200px] ${theme === "light" ? "opacity-40" : "opacity-70"}`}
      ></div>
    </a>

    <!-- Hamburger Menu Button -->
    <button
      bind:this={hamburgerRef}
      class="md:hidden text-2xl focus:outline-none z-60 flex justify-center items-center"
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
      class="hidden md:flex items-center gap-2 bg-[var(--pill-bg)] backdrop-blur-md px-3 py-2 rounded-full border border-[var(--pill-border)]"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      {#each anchors as anchor}
        <a
          href={`#${anchor}`}
          data-name={anchor}
          class={anchorClasses(anchor)}
          onclick={(e) => handleClick(e, anchor)}
        >
          {anchor}
        </a>
      {/each}
      <button
        onclick={themeStore.toggle}
        aria-label="Toggle theme"
        class="ml-1 p-2 rounded-full text-[color:var(--section-muted)] hover:text-[color:var(--section-text)] hover:bg-[var(--pill-bg)] transition-all duration-300"
      >
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
        class="fixed top-0 right-0 h-screen w-[280px] flex flex-col pt-20 px-6 z-50 md:hidden border-l border-[var(--pill-border)] mobile-nav-menu"
        style="background: var(--section-bg); color: var(--section-text);"
        transition:fly={{ x: 280, duration: 300, opacity: 1 }}
      >
        {#each anchors as anchor, i}
          <a
            href={`#${anchor}`}
            data-name={anchor}
            class={anchorClasses(anchor, true)}
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
          class="text-xl font-semibold py-4 px-6 my-2 text-[color:var(--section-muted)] hover:text-[var(--ui-primary)] hover:bg-[#e02b4514] rounded-lg transition-all duration-300 flex items-center gap-3 border-l-2 border-transparent hover:border-(--ui-primary) mobile-nav-item"
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
