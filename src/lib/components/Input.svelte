<script lang="ts">
    let { input = $bindable(null), value = $bindable(""), placeholder = "" } = $props();
</script>

<input
    bind:this={input}
    bind:value
    {placeholder}
    class="h-input rounded-card-sm border-border-input bg-background placeholder:text-foreground-alt/50 hover:border-dark-40 focus:ring-foreground focus:ring-offset-background inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 focus:outline-hidden sm:text-sm"
/>
