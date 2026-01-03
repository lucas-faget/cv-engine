<script lang="ts">
    import type { ContactDetails } from "$lib/types/ContactDetails";
    import Sortable from "./Sortable.svelte";
    import SortableItem from "./SortableItem.svelte";

    let { data }: { data: ContactDetails } = $props();

    const items = [
        { id: 0, icon: "lucide:mail", value: data.email },
        { id: 1, icon: "lucide:phone", value: data.phone },
        { id: 2, icon: "lucide:map-pin", value: data.address },
        { id: 3, icon: "lucide:globe", value: data.website },
        { id: 4, icon: "lucide:linkedin", value: data.linkedIn },
        { id: 5, icon: "lucide:github", value: data.github },
    ];
</script>

<Sortable>
    <div class="flex flex-col gap-4 p-4">
        {#each items as item (item.id)}
            <SortableItem>
                <div class="flex items-center gap-2.5">
                    <div
                        class="bg-foreground text-background flex size-9 shrink-0 items-center justify-center rounded-full"
                    >
                        <iconify-icon icon={item.icon} class="text-lg"></iconify-icon>
                    </div>
                    <span class="text-sm">{item.value}</span>
                </div>
            </SortableItem>
        {/each}
    </div>
</Sortable>
