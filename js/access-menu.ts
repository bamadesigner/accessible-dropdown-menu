(() => {
	const classes: { [key: string]: string } = {
		active: "acc-menu__item--active", // check
		expanded: "acc-menu__item--expanded",
	};
	class AccessibleMenu {
		menu: Element;
		focusSelectors: string[];
		constructor(menu: Element, focusSelectors?: string[]) {
			this.menu = menu;
			this.focusSelectors = focusSelectors || [
				"a[href]",
				"area[href]",
				"input:not([disabled]):not([type=\"hidden\"]):not([aria-hidden])",
				"select:not([disabled]):not([aria-hidden])",
				"textarea:not([disabled]):not([aria-hidden])",
				"button:not([disabled]):not([aria-hidden])",
				"iframe:not([tabindex^=\"-\"])",
				"object",
				"embed",
				"[contenteditable]",
				"[tabindex]:not([tabindex^=\"-\"])",
			];
			this.init();
		}
		getFocusableElements(container: Element): NodeListOf<Element> {
			return container.querySelectorAll(this.focusSelectors.join(","));
		}
		isFirstFocusableElement(element: Element, container: Element): boolean {
			const focusableElements = this.getFocusableElements(container);
			return 0 < focusableElements.length ? element === focusableElements[0] : false;
		}
		isLastFocusableElement(element: Element, container: Element): boolean {
			const focusableElements = this.getFocusableElements(container);
			return 0 < focusableElements.length ? element === focusableElements[focusableElements.length - 1] : false;
		}
		isRootMenuItem(item: HTMLElement): boolean {
			return item.dataset.accMenuItemRoot === "true";
		}
		openMenuItem(item: Element) {
			if (this.isRootMenuItem(item as HTMLElement)) {
				this.closeOpenMenuItems(this.menu);
			}
			item.classList.add(classes.expanded);
			const button: HTMLButtonElement | null = item.querySelector("button[data-acc-menu-item-button]");
			if (!button) {
				return;
			}
			const expandedLabel = button.dataset.expandedlabel;
			const expandedTitle = button.dataset.expandedtitle;
			if (expandedLabel) {
				button.setAttribute("aria-label", expandedLabel);
			}
			if (expandedTitle) {
				button.title = expandedTitle;
			}
			button.ariaExpanded = "true";
		}
		closeMenuItem(item: Element, focus = true) {
			item.classList.remove(classes.expanded);
			const button: HTMLButtonElement | null = item.querySelector("button[data-acc-menu-item-button]");
			if (button) {
				if (button.dataset.defaultLabel) {
					button.setAttribute("aria-label", button.dataset.defaultLabel);
				}
				if (button.dataset.defaultTitle) {
					button.title = button.dataset.defaultTitle;
				}
				button.ariaExpanded = "false";
				if (focus) {
					button.focus();
				}
			}
			this.closeOpenMenuItems(item);
		}
		closeOpenMenuItems(parent_elem: Element) {
			const expanded = parent_elem.querySelectorAll("." + classes.expanded);
			expanded.forEach((child) => {
				this.closeMenuItem(child, false);
			});
		}
		init() {
			let activeItems = 0;
			const parents = this.menu.querySelectorAll("[data-acc-menu-item-parent=\"true\"]");
			parents.forEach((item) => {
				try {
					// Must have a button and submenu.
					// Only want the first button since there is only one per item.
					// We don't want to get the children buttons.
					const button: HTMLButtonElement | null = item.querySelector("button[data-acc-menu-item-button");
					if (!button) {
						throw new Error("AccessibleMenu: Button not found for menu item with children.");
					}

					const controlsID = button.getAttribute("aria-controls");
					if (!controlsID) {
						throw new Error("AccessibleMenu: Button must have an aria-controls that points to the submenu.");
					}

					const submenu: Element | null = document.getElementById(controlsID);
					if (!submenu) {
						throw new Error("AccessibleMenu: Submenu not found for menu item with children.");
					}

					// Setup the button.
					button.dataset.defaultLabel = button.ariaLabel || undefined;
					button.dataset.defaultTitle = button.title;
					button.addEventListener("click", () => {
						if (button.ariaExpanded === "true") {
							this.closeMenuItem(item);
						} else {
							this.openMenuItem(item);
						}
					});

					// Handle ESC and tab out.
					submenu.addEventListener("keydown", (e: KeyboardEvent) => {
						if ("Escape" === e.key) {
							e.stopPropagation();
							this.closeMenuItem(item);
							return;
						}
						if ("Tab" !== e.key) {
							return;
						}
						if (!document.activeElement) {
							return;
						}
						if (e.shiftKey) {
							// Means we're tabbing out of the beginning of the element.
							if (this.isFirstFocusableElement(document.activeElement, submenu)) {
								this.closeMenuItem(item, false);
							}
							return;
						}
						// Means we're tabbing out of the end of the element.
						if (this.isLastFocusableElement(document.activeElement, submenu)) {
							this.closeMenuItem(item, false);
						}
					});

					// Make the item active.
					item.classList.add(classes.active);

					activeItems++;

					// eslint-disable-next-line @typescript-eslint/no-explicit-any
				} catch (error: any) {
					// If there's an error, will not make the item active.
					console.error(error);
				}
			});
			if (!activeItems) {
				return;
			}
			// Close open menus if the user clicks outside of the menu.
			document.addEventListener("click", () => {
				this.closeOpenMenuItems(this.menu);
			});
			this.menu.addEventListener("click", (e: Event) => {
				// Stops the document listener from firing.
				e.stopPropagation();
			});
		}
	}
	const accessMenus = document.querySelectorAll("[data-acc-menu]");
	accessMenus.forEach((menu) => {
		new AccessibleMenu(menu);
	});
})();
