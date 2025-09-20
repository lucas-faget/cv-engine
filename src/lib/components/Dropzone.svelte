<script lang="ts">
    import UploadSimple from "phosphor-svelte/lib/UploadSimple";

    let { src = $bindable("") } = $props();

    let file: File | null = null;
    let input: HTMLInputElement;

    function uploadFile(e: Event) {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
            file = target.files[0];
            src = URL.createObjectURL(file);
        }
    }
</script>

<div
    class="rounded-card border-border-input text-muted-foreground relative flex w-full items-center justify-center border-2 border-dashed bg-transparent py-6 font-semibold select-none"
>
    <div class="flex flex-col items-center justify-center gap-4 text-center">
        <UploadSimple class="size-8" />
        Upload a file
    </div>

    <input type="file" bind:this={input} class="absolute inset-0 cursor-pointer opacity-0" onchange={uploadFile} />
</div>
