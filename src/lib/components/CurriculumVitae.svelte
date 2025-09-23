<script lang="ts">
    import { PaneGroup, Pane, PaneResizer } from "paneforge";
    import { SplitHorizontal, SplitVertical } from "phosphor-svelte";
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
                    <SplitVertical class="size-6" />
                {:else}
                    <SplitHorizontal class="size-6" />
                {/if}
            </div>
        </div>
    </PaneResizer>
{/snippet}

<div class="a4 bg-background flex flex-col border shadow-xl">
    <PaneGroup direction="vertical">
        <Pane defaultSize={20} collapsedSize={0} collapsible={true} minSize={5} maxSize={50} class="border-b"></Pane>
        {@render risizer("vertical")}
        <Pane class="border-t">
            <PaneGroup direction="horizontal">
                <Pane defaultSize={30} collapsedSize={0} collapsible={true} minSize={10} maxSize={50} class="border-r"
                ></Pane>
                {@render risizer("horizontal")}
                <Pane class="border-l"></Pane>
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
