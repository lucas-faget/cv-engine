<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import "../app.css";
    import "@melloware/coloris/dist/coloris.css";
    import "iconify-icon";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
