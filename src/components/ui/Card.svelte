<script>
    let props = $props();
</script>

<div {...props} class={'card flex flex-col rounded-md from-base-950 to-base-700 border-base-800 min-h-[350px] '+ props.class}>
    <div class="card-title text-xl md:text-2xl p-5">
        {@render props.title?.()}
    </div>
    <div class="card-content p-5">
        {@render props.content?.()}
    </div>
    <div class="card-footer p-5">
        {@render props.footer?.()}
    </div>
</div>

<style>

</style>