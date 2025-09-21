<script lang="ts">
    import Moon from "phosphor-svelte/lib/Moon";
    import Sun from "phosphor-svelte/lib/Sun";
    import { onMount } from "svelte";

    let isDark: boolean = false;

    onMount(() => {
        const theme = localStorage.getItem("theme");

        if (theme) {
            isDark = theme === "dark";
        } else {
            isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        }

        applyTheme();
    });

    function toggleTheme(): void {
        isDark = !isDark;
        localStorage.setItem("theme", isDark ? "dark" : "light");
        applyTheme();
    }

    function applyTheme(): void {
        document.documentElement.classList.toggle("dark", isDark);
    }
</script>

<button
    onclick={toggleTheme}
    class="border-border-input bg-background-alt shadow-btn ring-dark ring-offset-background hover:bg-muted focus-visible:ring-dark focus-visible:ring-offset-background inline-flex size-10 shrink-0 items-center justify-center rounded-full border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
>
    {#if isDark}
        <Moon class="size-5" />
    {:else}
        <Sun class="size-5" />
    {/if}
</button>
