<script lang="ts">
    import Sidebar from "$lib/components/Sidebar.svelte";

    let sidebarOpen = $state<boolean>(true);
</script>

<Sidebar bind:open={sidebarOpen} />
<div class={`my-6 flex justify-center ${sidebarOpen ? "ml-100" : "ml-14"}`}>
    <!-- <CurriculumVitae /> -->
</div>
