<script>
  import { cn } from "@lib/utils";
  import BorderBeam from "./BorderBeam.svelte";

  let props = $props();
</script>

<div {...props} class={cn("card bg-base-200 shadow-md overflow-hidden", props.class)}>
  {@render props.children?.()}
  {#if !props.hideBeam}
    <BorderBeam size={150} duration={8} />
  {/if}
  {#if props.title}
    <div class="card-body p-0">
      {@render props.title?.()}
    </div>
  {/if}
  <div class="card-body pt-2 pb-0">
    {@render props.content?.()}
  </div>
  {#if props.footer}
    <div class="card-body pt-0">
      {@render props.footer?.()}
    </div>
  {/if}
</div>
