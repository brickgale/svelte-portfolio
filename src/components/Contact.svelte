<section id="contact" class="w-full min-h-screen flex flex-col relative justify-center items-center py-25 overflow-hidden px-4 sm:px-6 lg:px-8">
    <BgDots width={12} height={12} class="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] opacity-80" />
    <Card class="max-w-[500px] w-full p-6 rounded-lg border-0 overflow-hidden" hideBeam>
        <Meteors number={30} />
        {#snippet content()}
            <div class="flex flex-col gap-4">
                <div class="flex flex-row items-center gap-5 w-full">
                    <img src="/profile-pic.jpg" class="rounded-full w-24 h-24" alt="profile pic" />
                    <div class="flex flex-col">
                        <h4 class="text-xl font-bold mb-2">Brian Monsales</h4>
                        <div class="socials mb-2 flex flex-row gap-2">
                            {#each socialLinks as social }
                                <a href="{social.link}" target="_blank" rel="noopener noreferrer">
                                    <svelte:component this={social.icon} size={20} class="text-gray-200 hover:text-(--ui-primary) transition-all duration-300" />
                                </a>
                            {/each}
                        </div>
                        <p class="text-gray-300 text-sm mb-1 font-outfit relative">
                            <span class="rounded-full w-2 h-2 bg-green-400 inline-block absolute top-[6px] animate-ping"></span>
                            <span class="rounded-full w-2 h-2 bg-green-400 inline-block relative -top-[1px] mr-1"></span>
                            Available for work
                        </p>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex flex-row flex-wrap -m-2">
                        <div class="w-1/2 p-2">
                            <Button withBeam type="primary" btnclass="w-full" onclick={handleMailto}>
                                <Mail size={16} class="mr-2" />
                                Email Me
                            </Button>
                        </div>
                        <div class="w-1/2 p-2">
                            <Button type="primary" btnclass="w-full" onclick={copyToClipboard(email)}>
                                <Copy size={16} class="mr-2" />
                                Copy Email
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        {/snippet}
    </Card>
</section>

<script>
    import { Dribbble, Github, Linkedin, Mail, Copy } from '@lucide/svelte';
    import Card from '@components/ui/Card.svelte';
    import Button from '@components/ui/Button.svelte';
    import BgDots from '@components/ui/BgDots.svelte';
    import Meteors from '@components/ui/Meteors.svelte';
    
    const email = 'brianmonsales@gmail.com';

    const handleMailto = () => {
        window.location.href = `mailto:${email}`;
    }

    const copyToClipboard = (text) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                alert('Email copied to clipboard');
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
    }

    const socialLinks = [
        { icon: Dribbble, link: 'https://dribbble.com/brickgale' },
        { icon: Github, link: 'https://github.com/brickgale' },
        { icon: Linkedin, link: 'https://www.linkedin.com/in/brianmonsales/' },
    ]
</script>