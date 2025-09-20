<script lang="ts">
    import { onMount } from "svelte";
    import Input from "$lib/components/Input.svelte";

    let { color = $bindable("") } = $props();

    let input: HTMLInputElement | null = $state(null);

    onMount(async () => {
        if (!input) return;

        const Coloris = (await import("@melloware/coloris")).default;

        Coloris.init();

        Coloris({
            el: input,
            theme: "polaroid",
            alpha: false,
            wrap: false,
        });
    });

    function handleThumbnailClick() {
        input?.focus();
        input?.click();
    }
</script>

<div class="relative w-full">
    <Input bind:input type="text" placeholder="Pick a color" bind:value={color} />
    <button
        type="button"
        aria-label="Pick a color"
        class="absolute top-0 right-0 flex aspect-square h-full items-center justify-center p-2"
        onclick={handleThumbnailClick}
    >
        <div class="size-full rounded-full border-2" style="background-color: {color || 'transparent'}"></div>
    </button>
</div>
