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
      class="textarea textarea-bordered w-full h-40 focus:textarea-primary"
    ></textarea>
  {:else}
    <input
      autocomplete={props.autocomplete}
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      required={props.required}
      class="input input-bordered w-full focus:input-primary"
    />
  {/if}
</div>
