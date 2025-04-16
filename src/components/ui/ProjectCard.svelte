<script>
    import { cn } from "@lib/utils";
    let props = $props();
    const project = props.project
</script>

<div class={cn('rounded-2xl relative aspect-[4/3] overflow-hidden group', props.class)}>
    <img
      src="{project.imgSrc}"
      placeholder="blur"
      alt="don corleone"
      class="w-full object-cover m-0"
    />
    <!--  overlay  -->
    <div
      class="absolute inset-0 from-black/95 via-black/70 to-black/10 bg-gradient-to-t"
    ></div>
    <div class="text-gray-100 sm:px-4 py-0 sm:pb-3 text-left absolute pb-1 px-4 md:pb-4 inset-x-0 bottom-2 flex flex-col justify-end size-full">
        <h3 class="text-lg font-bold tracking-tighter mt-3 mb-1">
        {project.name}
        </h3>
        <p class="text-sm leading-5">{project.description}</p>
    </div>
</div>