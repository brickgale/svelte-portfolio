<script>
  import BorderBeam from "./BorderBeam.svelte";
  import { cn } from "@lib/utils";

  let props = $props();

  const variantClass =
    props.sType === "success"
      ? "btn-success"
      : props.type === "primary"
        ? "btn-primary"
        : "btn-neutral";
</script>

<button
  type="button"
  class={cn(
    "btn relative overflow-hidden transition-transform duration-200 ease-out hover:-translate-y-1 active:translate-y-0",
    variantClass,
    props.btnclass,
    props.class
  )}
  onclick={props.onclick}
>
  {#if props.withBeam}
    <BorderBeam size={80} duration={4} />
  {/if}
  {@render props.children?.()}
</button>
