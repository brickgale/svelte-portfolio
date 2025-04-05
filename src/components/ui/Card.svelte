<script>
    let props = $props();
</script>

<div {...props} class={'card flex flex-col rounded-md bg-gray-700 min-h-[200px] '+ props.class}>
    <div class="card-title text-xl md:text-2xl p-5 font-medium">
        {@render props.title?.()}
    </div>
    <div class="card-content p-5 flex-grow-2">
        {@render props.content?.()}
    </div>
    <div class="card-footer p-5 min-h-[112px] font-light">
        {@render props.footer?.()}
    </div>
</div>

<style>

</style>