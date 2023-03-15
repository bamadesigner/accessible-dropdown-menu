<script lang="ts">
	export let item: NavMenuItem;
	export let index: number;
	export let level: number = 1;
	export let max_level: number = 3;

	let hasChildren: boolean;
	$: hasChildren = level < max_level && item.children && item.children.length ? true : false;

	let childId: string | undefined;
	$: childId = item.id ? `${item.id}-submenu` : `submenu-${index}`;
</script>

<!-- An href is required, unless there are children items. -->
{#if item.href || hasChildren}
	<li
		id={item.id}
		class="acc-menu__item"
		class:acc-menu__item--root={level === 1}
		class:acc-menu__item--children={hasChildren}>
		<span class="acc-menu__main">
			{#if item.href}
				<a class="acc-menu__text acc-menu__link" href={item.href} aria-label={item.label}>{item.text}</a>
			{:else}
				<span class="acc-menu__text">{item.text}</span>
			{/if}
			{#if hasChildren}
				<button
					type="button"
					class="acc-menu__button"
					aria-label="Show submenu for {item.text}"
					title="Show submenu"
					aria-controls={childId}
					aria-expanded="false"
					data-expandedLabel="Hide submenu for {item.text}"
					data-expandedTitle="Hide submenu">
					<span class="acc-menu__button__icon" />
				</button>
			{/if}
		</span>
		{#if hasChildren && item.children && item.children.length}
			<ul id={childId} class="acc-menu__submenu">
				{#each item.children as child, i}
					<svelte:self item={child} level={level + 1} {max_level} index={i} />
				{/each}
			</ul>
		{/if}
	</li>
{/if}
