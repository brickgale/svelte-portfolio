<script lang="ts">
  let props = $props();
</script>

<div class="relative w-full">
    {#if props.isTextarea}
        <textarea
            autocomplete={props.autocomplete}
            placeholder={props.placeholder}
            name={props.name}
            required={props.required}
            class="h-40 pb-0 w-full cursor-default rounded-md border border-gray-800 bg-gray-950 p-3.5 text-gray-100 transition-colors duration-500 placeholder:select-none placeholder:text-gray-500 focus:border-(--ui-primary) focus:outline-none"
        ></textarea>
    {:else}
        <input
            autocomplete={props.autocomplete}
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            required={props.required}
            class="h-12 w-full cursor-default rounded-md border border-gray-800 bg-gray-950 p-3.5 text-gray-100 transition-colors duration-500 placeholder:select-none placeholder:text-gray-500 focus:border-(--ui-primary) focus:outline-none"
        />
  {/if}
</div>