<script lang="ts">
    import UploadSimple from "phosphor-svelte/lib/UploadSimple";

    let { id = "", src = $bindable("") } = $props();

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
    class="rounded-card border-border-input bg-muted hover:bg-dark-10 relative flex w-full items-center justify-center border-2 border-dashed py-6 font-semibold select-none"
>
    <div class="flex flex-col items-center justify-center gap-2 text-center">
        <div
            class="border-border-input bg-background-alt shadow-btn ring-dark ring-offset-background hover:bg-muted focus-visible:ring-dark focus-visible:ring-offset-background inline-flex size-10 shrink-0 items-center justify-center rounded-full border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
        >
            <UploadSimple class="size-5" />
        </div>
        <span class="text-foreground-alt">Drag & drop your files here, or click to browse</span>
        <span class="text-muted-foreground">JPG, PNG, SVG, WEBP</span>
    </div>

    <input
        type="file"
        {id}
        accept="image/png, image/jpeg, image/svg+xml, image/webp"
        bind:this={input}
        class="absolute inset-0 cursor-pointer opacity-0"
        onchange={uploadFile}
    />
</div>
