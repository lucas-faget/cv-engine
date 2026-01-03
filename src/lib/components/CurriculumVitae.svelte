<script lang="ts">
    import { PaneGroup, Pane, PaneResizer } from "paneforge";
    import { cv } from "$lib/stores/cv.svelte";
    import Sortable from "./Sortable.svelte";
    import SortableItem from "./SortableItem.svelte";
    import ContactDetails from "./ContactDetails.svelte";
    import Timeline from "./Timeline.svelte";
</script>

{#snippet risizer(direction = "horizontal")}
    <PaneResizer class="group relative">
        <div
            class={`absolute ${direction === "vertical" ? "h-2 w-full -translate-y-1/2" : "h-full w-2 -translate-x-1/2"} group-hover:bg-muted z-10 bg-transparent`}
        ></div>
        <div
            class={`absolute ${direction === "vertical" ? "top-0 left-1/2" : "top-1/2 left-0"} z-20 -translate-x-1/2 -translate-y-1/2`}
        >
            <div
                class="border-border-input bg-background-alt shadow-btn ring-dark ring-offset-background group-hover:bg-muted focus-visible:ring-dark focus-visible:ring-offset-background inline-flex size-8 items-center justify-center rounded-full border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
            >
                {#if direction === "vertical"}
                    <iconify-icon icon="ph:split-vertical" class="text-xl"></iconify-icon>
                {:else}
                    <iconify-icon icon="ph:split-horizontal" class="text-xl"></iconify-icon>
                {/if}
            </div>
        </div>
    </PaneResizer>
{/snippet}

{#snippet header()}
    <div></div>
{/snippet}

{#snippet aside()}
    <ContactDetails data={cv.aside.contactDetails} />
{/snippet}

{#snippet body()}
    <Sortable>
        <div class="flex flex-col gap-6 p-4">
            <SortableItem>
                <div class="mb-4 flex items-center gap-2.5 border-b text-xl uppercase">
                    <iconify-icon icon="lucide:briefcase"></iconify-icon>
                    <span>Work experience</span>
                </div>
                <Timeline items={cv.body.workExperience} />
            </SortableItem>

            <SortableItem>
                <div class="mb-4 flex items-center gap-2.5 border-b text-xl uppercase">
                    <iconify-icon icon="lucide:graduation-cap"></iconify-icon>
                    <span>Education</span>
                </div>
                <Timeline items={cv.body.education} />
            </SortableItem>
        </div>
    </Sortable>
{/snippet}

<div class="a4 bg-background flex flex-col border shadow-xl">
    <PaneGroup direction="vertical">
        <Pane
            defaultSize={20}
            collapsedSize={0}
            collapsible={true}
            minSize={5}
            maxSize={50}
            class="border-b"
            style="
                background-image: url('{cv.header.bgImage}');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                background-color: {cv.header.bgColor || 'transparent'};
            "
        >
            {@render header?.()}
        </Pane>
        {@render risizer("vertical")}
        <Pane class="border-t">
            <PaneGroup direction="horizontal">
                <Pane
                    defaultSize={30}
                    collapsedSize={0}
                    collapsible={true}
                    minSize={10}
                    maxSize={50}
                    class="border-r"
                    style="background-color: {cv.aside.bgColor || 'transparent'}"
                >
                    {@render aside?.()}
                </Pane>
                {@render risizer("horizontal")}
                <Pane class="border-l" style="background-color: {cv.body.bgColor || 'transparent'}">
                    {@render body?.()}
                </Pane>
            </PaneGroup>
        </Pane>
    </PaneGroup>
</div>

<style>
    .a4 {
        width: 210mm;
        height: 297mm;
    }
</style>
