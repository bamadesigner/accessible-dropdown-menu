<script lang="ts">
	import { dev, version } from "$app/environment";
	import NavItem from "$lib/NavItem.svelte";

	export let mode = "horizontal";
	export let menu: NavMenu;

	let min: string;
	$: min = dev ? "" : ".min";
</script>

<svelte:head>
	<link rel="preload" href="./access-menu-{mode}{min}.css?v={version}" as="style" />
	<link rel="stylesheet" href="./access-menu-{mode}{min}.css?v={version}" />
	<link rel="preload" href="./access-menu{min}.js?v={version}" as="script" />
	<script async type={dev ? "module" : "text/javascript"} src="./access-menu{min}.js?v={version}"></script>
</svelte:head>

{#if !menu.items || !menu.items.length}
	<p>There are no menu items.</p>
{:else}
	<nav id={menu.id} class="acc-nav" aria-label={menu.ariaLabel}>
		<ul class="acc-menu" data-acc-menu>
			{#each menu.items as item, i}
				<NavItem {item} index={i} maxDepth={menu.maxDepth} />
			{/each}
		</ul>
	</nav>
{/if}
