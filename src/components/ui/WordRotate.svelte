<script lang="ts">
  import { cn } from "@lib/utils";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let props = $props();
  let words: string[] = props.words;
  let duration: number = 3000;

  let index = $state(0);
  let chnageIndex = () => {
    index = (index + 1) % words.length;
  };
  onMount(() => {
    let interval = setInterval(chnageIndex, duration);
    return () => clearInterval(interval);
  });
</script>
  
<div {...props} class="overflow-hidden">
  {#key index}
    <h1
      in:fly={{ y: -50, delay: 200 }}
      out:fly={{ y: 40, duration: 200 }}
      class={cn(props.class, "text-center")}
    >
      {props.words[index]}
    </h1>
  {/key}
</div>