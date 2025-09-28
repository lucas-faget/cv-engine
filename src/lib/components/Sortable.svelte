<script lang="ts">
    import { setContext } from "svelte";
    import { DragDropManager } from "@dnd-kit/dom";
    import type { SortableStore } from "$lib/types/SortableStore";

    let { children } = $props();

    let store: SortableStore = $state({
        manager: new DragDropManager(),
        index: 0,
    });

    setContext("store", store);
</script>

{@render children?.()}
