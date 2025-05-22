
<button type={props.type} class="relative flex overflow-hidden rounded-xl p-px h-[46px] {props.btnclass}" onclick={props.onclick}>
    {#if withBeam}
        <BorderBeam size={80} duration={4} />
    {/if}
    <span class={cn('flex h-full w-full cursor-pointer items-center justify-center rounded-[11px] transition-colors ease-in-out duration-500', btnClass, props.class, 'px-4 py-2 text-sm font-medium backdrop-blur-3xl')} >
        {@render props.children?.()}
    </span>
</button>

<script>
    import BorderBeam from "./BorderBeam.svelte";
    import { cn } from "@lib/utils";

    let props = $props();
    let btnClass = $state('bg-neutral-950 text-gray-50 hover:bg-neutral-900');
    let withBeam = $state(false);
    withBeam = props.withBeam;
    if(props.sType == 'success') btnClass = 'bg-emerald-900 text-emerald-400 border border-emerald-900 hover:bg-emerald-800';
</script>