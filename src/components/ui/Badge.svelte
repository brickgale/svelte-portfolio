<script lang="ts">
  import { cn } from "@lib/utils";
  let props = $props();
</script>

<div class={cn('relative inline-flex overflow-hidden rounded-full p-px',props.outerClass)}>
    {#if !props.hideBeam}
      <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]"></span>
    {/if}
    <span
      class={cn('inline-flex h-full w-full items-center justify-center rounded-full bg-neutral-950 px-3 py-1 text-xs font-medium text-gray-50 backdrop-blur-3xl',props.class)}
    >
      {props.text}
    </span>
</div>