<section id="contact" class="w-full min-h-screen flex flex-col relative justify-center items-center py-25 overflow-hidden">
    <h2 class="text-7xl font-semibold bg-gradient-to-b from-white to-neutral-700 text-transparent bg-clip-text">Leave a message</h2>

    <form action="/" class="max-w-[500px] w-full pt-5 pb-20">
        <div class="flex flex-col gap-4">
            <Input type="text" name="subject" placeholder="Subject" class="w-full border border-gray-300 rounded-md p-2" required />
            <Input type="email" name="email" placeholder="Email" class="w-full border border-gray-300 rounded-md p-2" required />
            <Input isTextarea={true} type="text" name="message" placeholder="Message" class="w-full border border-gray-300 rounded-md p-2" required />
            <Button type="submit" class="bg-blue-500 text-white p-10" icon="send" text="Send" />
        </div>
    </form>
</section>

<script>
    import Button from '@components/ui/Button.svelte';
    import Input from '@components/ui/Input.svelte';
</script>