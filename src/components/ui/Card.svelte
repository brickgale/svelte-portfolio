<script>
    import BorderBeam from "./BorderBeam.svelte";

    let props = $props();
</script>

<div {...props} class={'card flex flex-col rounded-md bg-gradient-to-br hover:bg-gradient-to-tl from-neutral-800 to-stone-700 min-h-[200px] relative '+ props.class}>
    <BorderBeam size={120} duration={8} />

    <div class="card-title text-xl md:text-2xl p-5 text-gray-200 font-medium">
        {@render props.title?.()}
    </div>
    <div class="card-content p-5 flex-grow-2 text-gray-300 font-light">
        {@render props.content?.()}
    </div>
    <div class="card-footer p-5 min-h-[112px] text-gray-300 font-light">
        {@render props.footer?.()}
    </div>
</div>

<style>
    .card {
        border: 1px solid rgba(255,255,255, 0.3);
        transition: .3s ease-in-out;
    }
    .card:hover {
        transition: 1.5s ease-in-out;
    }
</style>