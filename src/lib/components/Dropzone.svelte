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
    class="relative rounded-card border-border-input text-muted-foreground flex w-full py-6 select-none items-center justify-center border-2 border-dashed bg-transparent font-semibold"
>
    <div class="flex flex-col items-center justify-center gap-4 text-center">
        <UploadSimple class="size-8" />
        Upload a file
    </div>

    <input type="file" bind:this={input} class="absolute inset-0 opacity-0 cursor-pointer" onchange={uploadFile} />
</div>
