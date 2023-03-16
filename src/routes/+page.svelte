<script lang="ts">
	import AccessibleNav from "$lib/Nav.svelte";
	import menu_data from "$lib/menu";
	import menu_sample from "$lib/menu_sample";

	let menu: NavMenu;
	$: menu = menu_data && menu_data.items ? menu_data : menu_sample;
</script>

<svelte:head>
	<title>Accessible dropdown menu</title>
	<meta name="description" content="HTML, CSS, and JavaScript for an accessible dropdown menu" />
</svelte:head>

<h1>Accessible dropdown menu</h1>
<p>The following is an accessible "horizontal" dropdown menu. It is not (yet) built for "mobile, or smaller screens.</p>

{#if !menu}
	<p>There is no menu information.</p>
{:else}
	<AccessibleNav {menu} />
{/if}
