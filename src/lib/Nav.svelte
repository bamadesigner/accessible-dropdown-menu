<script lang="ts">
	import { dev, version } from "$app/environment";
	import NavItem from "$lib/NavItem.svelte";

	export let mode = "horizontal";
	export let menu: NavMenu;
	export let max_level: number = 3;

	let js_file: string;
	$: js_file = dev ? "access-menu.js" : "access-menu.min.js";
</script>

<svelte:head>
	<link rel="preload" href="/access-menu-{mode}.css?v={version}" as="style" />
	<link rel="stylesheet" href="/access-menu-{mode}.css?v={version}" />
	<script async type="text/javascript" src="/{js_file}?v={version}"></script>
</svelte:head>

{#if !menu.items || !menu.items.length}
	<p>There are no menu items.</p>
{:else}
	<nav id={menu.id} class="acc-nav" aria-label={menu.ariaLabel}>
		<ul class="acc-menu">
			{#each menu.items as item, i}
				<NavItem {item} index={i} {max_level} />
			{/each}
		</ul>
	</nav>
{/if}
