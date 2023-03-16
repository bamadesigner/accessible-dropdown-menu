<script lang="ts">
	import { version } from "$app/environment";
</script>

<svelte:head>
	<link rel="preload" href="./normalize.css?v={version}" as="style" />
	<link rel="stylesheet" href="./normalize.css?v={version}" />
	<link rel="preload" href="./normalize.css?v={version}" as="style" />
	<link rel="stylesheet" href="./base.css?v={version}" />
</svelte:head>

<slot />
