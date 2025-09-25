<script lang="ts">
    import { Accordion, Label, Button } from "bits-ui";
    import { CaretDoubleLeft, CaretDoubleRight, CaretDown, Browser, SidebarSimple, Layout } from "phosphor-svelte";
    import DarkmodeToggle from "./DarkmodeToggle.svelte";
    import Dropzone from "./Dropzone.svelte";
    import ColorPicker from "./ColorPicker.svelte";
    import { cv } from "$lib/stores/cv.svelte";

    let { open = $bindable() } = $props();

    let accordionValues = $state<string[]>([]);

    const items = [
        {
            value: "header",
            icon: Browser,
            title: "Header",
            content: header,
        },
        {
            value: "aside",
            icon: SidebarSimple,
            title: "Aside",
            content: aside,
        },
        {
            value: "body",
            icon: Layout,
            title: "Body",
            content: body,
        },
    ];

    function openAccordionItem(value: string): void {
        open = true;
        if (!accordionValues.includes(value)) {
            accordionValues.push(value);
        }
    }
</script>

{#snippet header()}
    <div class="flex flex-col gap-2.5">
        <Label.Root for="header-image-input" class="text-foreground-alt text-sm font-medium">
            Background image :
        </Label.Root>
        <Dropzone id="header-image-input" bind:src={cv.header.bgImage} />
    </div>

    <div class="flex flex-col gap-2.5">
        <Label.Root for="header-color-input" class="text-foreground-alt text-sm font-medium">
            Background color :
        </Label.Root>
        <ColorPicker id="header-color-input" bind:color={cv.header.bgColor} />
    </div>
{/snippet}

{#snippet aside()}
    <div class="flex flex-col gap-2.5">
        <Label.Root for="aside-color-input" class="text-foreground-alt text-sm font-medium">
            Background color :
        </Label.Root>
        <ColorPicker id="aside-color-input" bind:color={cv.aside.bgColor} />
    </div>
{/snippet}

{#snippet body()}
    <div class="flex flex-col gap-2.5">
        <Label.Root for="body-color-input" class="text-foreground-alt text-sm font-medium">
            Background color :
        </Label.Root>
        <ColorPicker id="body-color-input" bind:color={cv.body.bgColor} />
    </div>
{/snippet}

<div
    class={`bg-background-alt fixed inset-0 flex h-screen max-w-screen flex-col border-r-2 duration-300 ${open ? "w-100" : "w-14"}`}
>
    <div class="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
        <button
            onclick={() => (open = !open)}
            class="border-border-input bg-background-alt shadow-btn ring-dark ring-offset-background hover:bg-muted focus-visible:ring-dark focus-visible:ring-offset-background inline-flex size-8 items-center justify-center rounded-full border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
        >
            {#if open}
                <CaretDoubleLeft class="size-4" />
            {:else}
                <CaretDoubleRight class="size-4" />
            {/if}
        </button>
    </div>
    <div class="mb-14 flex-1 overflow-y-auto">
        {#if open}
            <div class="text-foreground-alt flex h-10 items-center border-b px-2.5 text-sm">Layers</div>
            <Accordion.Root class="w-full" type="multiple" bind:value={accordionValues}>
                {#each items as item (item.value)}
                    <Accordion.Item value={item.value} class="border-dark-10 group border-b px-2.5">
                        <Accordion.Header>
                            <Accordion.Trigger
                                class="flex w-full flex-1 items-center justify-between py-2 text-sm font-medium transition-all select-none [&[data-state=open]>span>svg]:rotate-180"
                            >
                                <item.icon class="mr-2 size-6" />
                                <span class="w-full text-left">
                                    {item.title}
                                </span>
                                <span
                                    class="hover:bg-dark-10 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-transparent"
                                >
                                    <CaretDown class="size-4 transition-transform duration-200" />
                                </span>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content
                            class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
                        >
                            <div class="px-2 pt-2 pb-4">
                                <div class="flex flex-col gap-4">
                                    {@render item.content()}
                                </div>
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>
                {/each}
            </Accordion.Root>
        {:else}
            {#each items as item (item.value)}
                <div class="group border-dark-10 flex aspect-square w-full items-center justify-center border-b">
                    <button
                        onclick={() => openAccordionItem(item.value)}
                        class="group-hover:bg-dark-10 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-transparent"
                    >
                        <item.icon class="size-6 transition-transform duration-200" />
                    </button>
                </div>
            {/each}
        {/if}
    </div>
    {#if open}
        <div class="absolute bottom-0 left-0 flex h-14 w-full items-center justify-between border-t px-2.5">
            <DarkmodeToggle />
            <Button.Root
                class="rounded-input bg-dark text-background shadow-mini hover:bg-dark/95 inline-flex h-10 items-center justify-center px-3.5 text-sm font-semibold active:scale-[0.98] active:transition-all"
            >
                Export
            </Button.Root>
        </div>
    {:else}
        <div class="absolute bottom-0 left-0 flex h-14 w-full items-center justify-center">
            <DarkmodeToggle />
        </div>
    {/if}
</div>
