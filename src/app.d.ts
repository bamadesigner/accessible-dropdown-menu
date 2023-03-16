// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface NavMenuItem {
		id?: string;
		label?: string; // the <a> aria-label
		href?: string;
		text: string; // the <a> display text
		children?: NavMenuItem[];
	}

	interface NavMenu {
		id?: string;
		ariaLabel?: string;
		items?: NavMenuItem[];
	}
}

export { };
