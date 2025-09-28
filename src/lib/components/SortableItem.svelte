<script lang="ts">
    import { onMount } from "svelte";
    import { getContext } from "svelte";
    import { useId } from "bits-ui";
    import { Sortable } from "@dnd-kit/dom/sortable";
    import type { SortableStore } from "$lib/types/SortableStore";

    let { children } = $props();

    let ref: HTMLElement | null = $state(null);

    const store: SortableStore = getContext("store");

    onMount(() => {
        if (!ref) return;

        new Sortable(
            {
                id: useId(),
                index: store.index++,
                element: ref,
            },
            store.manager,
        );
    });
</script>

<div bind:this={ref}>
    {@render children?.()}
</div>
