<script lang="ts">
	import AccessibleNav from "$lib/Nav.svelte";
	import items from "$lib/menu_items";
	import items_sample from "$lib/menu_items_sample";
</script>

<svelte:head>
	<title>Accessible dropdown menu</title>
</svelte:head>

<h1>Accessible dropdown menu</h1>
<AccessibleNav id="main-menu" ariaLabel="Primary" items={items && items.length ? items : items_sample} />
