<script>
    import { cn, stringTruncate } from "@lib/utils";
    let props = $props();
    const project = props.project
</script>

<div class={cn('rounded-2xl relative aspect-[4/3] overflow-hidden group', props.class)}>
    <img
      src="{project.imgSrc}"
      placeholder="blur"
      alt="{project.name}"
      class="w-full object-cover m-0 group-hover:-translate-y1/3"
    />
    <!--  overlay  -->
    <div
      class="absolute inset-0 from-black/95 via-black/70 to-black/10 bg-gradient-to-t"
    ></div>
    <div class="text-gray-100 sm:px-4 py-0 sm:pb-3 text-left absolute pb-1 px-4 md:pb-4 inset-x-0 bottom-2 flex flex-col justify-end size-full cursor-pointer">
        <h3 class="text-lg font-bold tracking-wide mt-3 mb-1">{project.name}</h3>
        <p class="min-h-[62px] text-sm leading-5">{stringTruncate(project.description, 150)}</p>
    </div>
</div>