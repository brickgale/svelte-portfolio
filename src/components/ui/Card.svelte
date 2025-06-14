<script>
    import { cn } from "@lib/utils";
    import BorderBeam from "./BorderBeam.svelte";

    let props = $props();
</script>

<div {...props} class={cn('card flex flex-col rounded-md bg-gradient-to-br hover:bg-gradient-to-tl from-neutral-800 to-stone-700 relative',props.class)}>
    {@render props.children?.()}
    {#if !props.hideBeam}
        <BorderBeam size={150} duration={8} />
    {/if}
    {#if props.title}
        <div class="card-title text-xl md:text-2xl p-5 text-gray-200 font-medium">
            {@render props.title?.()}
        </div>
    {/if}
    <div class="card-content flex-grow-2 text-gray-300 font-light">
        {@render props.content?.()}
    </div>
    {#if props.footer}
        <div class="card-footer px-6 py-2 min-h-[105px] text-gray-300 font-light">
            {@render props.footer?.()}
        </div>
    {/if}
</div>